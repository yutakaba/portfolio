// app/quiz/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { styled } from '@linaria/react';
import { motion, AnimatePresence } from 'framer-motion';
import { questions } from '@/data/questions';
import { Question } from '@/data/questions';

const QuizTimer = ({ totalTime = 60 }) => {
  const countdownItems = ['3', '2', '1', 'Start!'];
  const [step, setStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [usedIds, setUsedIds] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (step < countdownItems.length) {
      const timer = setTimeout(() => setStep((prev) => prev + 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setShowQuiz(true);
      loadNextQuestion();
    }
  }, [step]);

  useEffect(() => {
    if (!showQuiz || timeLeft <= 0) return;
    const timerId = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerId);
  }, [showQuiz, timeLeft]);

  const loadNextQuestion = () => {
    const remaining = questions.filter((q) => !usedIds.includes(q.id));
    if (remaining.length === 0) {
      alert('すべての問題を出題しました');
      return;
    }
    const next = remaining[Math.floor(Math.random() * remaining.length)];
    setCurrentQuestion(next);
    setUsedIds((prev) => [...prev, next.id]);
    setUserAnswer('');
  };

  const progressPercentage = (timeLeft / totalTime) * 100;

  return (
    <Container>
      {!showQuiz ? (
        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.5 }}
            transition={{ duration: 0.6 }}
          >
            <CountdownText>{countdownItems[step]}</CountdownText>
          </motion.div>
        </AnimatePresence>
      ) : (
        <>
          <GameContainer>
            <TimerWrapper>
              <TimerRing style={{ '--progress': `${progressPercentage}%` }} />
              <InnerContent>
                <LabelA>A</LabelA>
                <AnswerBoxWrapper>
                  <AnswerBox />
                  <AnswerLabel>正解数</AnswerLabel>
                </AnswerBoxWrapper>
              </InnerContent>
            </TimerWrapper>
            <BottomGauge>
              <QIcon>Q</QIcon>
              <BottomGaugeProgress style={{ transform: `scaleX(${progressPercentage / 100})` }} />
            </BottomGauge>
          </GameContainer>
          {currentQuestion && (
            <QuizBox>
              <QuestionText>{currentQuestion.question}</QuestionText>
              <AnswerInput
                type="text"
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
                placeholder="答えを入力"
              />
              <button onClick={loadNextQuestion}>次の問題</button>
            </QuizBox>
          )}
        </>
      )}
    </Container>
  );
};

export default QuizTimer;

const Container = styled.div`
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: #1a1a2e;
`;

const CountdownText = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: aliceblue;
`;

const QuizBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  color: white;
  align-items: center;
`;

const QuestionText = styled.h2`
  font-size: 24px;
`;

const AnswerInput = styled.input`
  font-size: 18px;
  padding: 8px 12px;
  border-radius: 4px;
  border: none;
`;

const GameContainer = styled.div`
  width: 600px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
`;

const TimerWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TimerRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background: conic-gradient(
    #00ff00 var(--progress, 100%),
    #333 0%
  );
  mask: radial-gradient(transparent 65%, black 66%);
  -webkit-mask: radial-gradient(transparent 65%, black 66%);
`;

const InnerContent = styled.div`
  width: 380px;
  height: 180px;
  background: linear-gradient(135deg, #a2f4ff, #6dceda);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 15px 30px;
  box-sizing: border-box;
  position: relative;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.2);
`;

const LabelA = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
`;

const AnswerBoxWrapper = styled.div`
  position: absolute;
  bottom: 25px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  gap: 10px;
`;

const AnswerBox = styled.div`
  width: 180px;
  height: 30px;
  background: white;
  border-radius: 15px;
  border: 2px solid #a2f4ff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
`;

const AnswerLabel = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.4);
`;

const BottomGauge = styled.div`
  width: 95%;
  height: 25px;
  background-color: #333;
  border-radius: 12.5px;
  padding: 4px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
`;

const BottomGaugeProgress = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #00ff00, #aaff80);
  border-radius: 8px;
  transition: transform 1s linear;
  transform-origin: left;
`;

const QIcon = styled.div`
  position: absolute;
  left: 30px;
  color: #1a1a2e;
  font-weight: bold;
  font-size: 16px;
  background: #00ff00;
  border-radius: 5px;
  padding: 0 5px;
  z-index: 2;
`;

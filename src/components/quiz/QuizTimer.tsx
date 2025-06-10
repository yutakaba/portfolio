// QuizTimer.tsx
import React, { useState, useEffect } from 'react';
import { styled } from '@linaria/react';
import { getRandomQuestion } from '@/utils/selectQuestion';
import { Question } from '@/data/questions';

const QuizTimer = ({ totalTime = 60 }) => {
  const [usedIds, setUsedIds] = useState<string[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null);
  const [userAnswer, setUserAnswer] = useState('');

  useEffect(() => {
    loadNextQuestion();
  }, []);

  const loadNextQuestion = () => {
    const next = getRandomQuestion(usedIds);
    if (next) {
      setCurrentQuestion(next);
      setUsedIds((prev) => [...prev, next.id]);
      setUserAnswer('');
    } else {
      alert('すべての問題を出題しました');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('回答:', userAnswer);
    loadNextQuestion(); // 今は正誤判定なしで次の問題
  };

  return (
    <div>
      {currentQuestion && (
        <>
          <h2>{currentQuestion.question}</h2>

          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              placeholder="答えを入力"
            />
            <button type="submit">送信</button>
          </form>
        </>
      )}
    </div>
  );
};

export default QuizTimer;

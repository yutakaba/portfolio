// app/quiz/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@linaria/react';
import QuizTimer from '@/components/quiz/QuizTimer';

export default function QuizPage() {
  const countdownItems = ['3', '2', '1', 'Start!'];
  const [step, setStep] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  useEffect(() => {
    if (step < countdownItems.length) {
      const timer = setTimeout(() => {
        setStep((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowQuiz(true);
    }
  }, [step]);

  return (
    <Container>
      {!showQuiz ? (
        <AnimatePresence mode="wait">
          <motion.div 
            key={step}
            // 【初期状態】出現前のスタイル（ふわっと出てくる前）
            initial={{ opacity: 0, scale: 0.5 }}
            // 【表示中】アニメーション終了時のスタイル（表示されているとき）
            animate={{ opacity: 1, scale: 1 }}
            // 【終了時】次のstepに切り替わるときの退場アニメーション
            exit={{ opacity: 0, scale: 1.5 }}
            // 【アニメーションの速さ】全体のduration（秒単位）
            transition={{ duration: 0.6 }}
          >
            <CountdownText>{countdownItems[step]}</CountdownText>
          </motion.div>
        </AnimatePresence>
      ) : (
        <QuizTimer />
      )}
    </Container>
  );
}

const Container = styled.div`
  height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a1a2e;
  background-image: linear-gradient(rgba(0, 255, 135, 0.1) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0, 255, 135, 0.1) 1px, transparent 1px);
`;

const CountdownText = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: aliceblue;
  z-index: 1;
`;


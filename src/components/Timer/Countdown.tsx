'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { styled } from '@linaria/react';

const Countdown = ({ onComplete }: { onComplete: () => void }) => {
  const countdownItems = ['3', '2', '1', 'Start!']; // 内部で管理
  const [step, setStep] = useState(0);

  useEffect(() => {
    if (step < countdownItems.length) {
      const timer = setTimeout(() => setStep((prev) => prev + 1), 1000);
      return () => clearTimeout(timer);
    } else {
      onComplete();
    }
  }, [step, countdownItems, onComplete]);

  return (
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
  );
};

export default Countdown;

// --- Styled components ---
const CountdownText = styled.h1`
  font-size: 64px;
  font-weight: bold;
  color: aliceblue;
`;
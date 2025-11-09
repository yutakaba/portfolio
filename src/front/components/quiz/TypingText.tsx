'use client';

import { useState, useEffect } from 'react';

type Props = {
  text: string;
  speed?: number; // ms per character
};

const TypingText = ({ text, speed = 50 }: Props) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const intervalId = setInterval(() => {
      setDisplayedText((prev) => prev + text[currentIndex]);
      currentIndex++;

      if (currentIndex >= text.length) {
        clearInterval(intervalId);
      }
    }, speed);

    return () => clearInterval(intervalId);
  }, [text, speed]);

  return <p>{displayedText}</p>;
};

export default TypingText;

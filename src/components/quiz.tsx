import React, { useState, useEffect } from 'react';
import { styled } from '@linaria/react';

// --- スタイル定義 (Linaria) ---

const GameContainer = styled.div`
  width: 600px;
  height: 400px;
  background-color: #1a1a2e;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  font-family: sans-serif;
  // 背景のグリッド線
  background-image: linear-gradient(rgba(0, 255, 135, 0.1) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0, 255, 135, 0.1) 1px, transparent 1px);
  background-size: 40px 40px;
`;

const TimerWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 280px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// conic-gradientを使ってタイマーリングを表現
const TimerRing = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  
  // Reactから渡される --progress 変数を使ってグラデーションを制御
  background: conic-gradient(
    #00ff00 var(--progress, 100%), 
    #333 0%
  );
  
  // マスクを使ってドーナツ状にくり抜く
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
  position: relative; // 中央の要素を配置するため
  box-shadow: inset 0 0 10px rgba(0,0,0,0.2);
`;

const LabelA = styled.div`
  color: white;
  font-size: 24px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
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
  box-shadow: 0 2px 5px rgba(0,0,0,0.2);
`;

const AnswerLabel = styled.span`
  color: white;
  font-size: 16px;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.4);
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
  transition: transform 1s linear; // なめらかに減るように
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


// --- Reactコンポーネント ---

const QuizTimer = ({ totalTime = 60 }) => {
  const [timeLeft, setTimeLeft] = useState(totalTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timerId = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    // コンポーネントがアンマウントされた時にタイマーをクリア
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const progressPercentage = (timeLeft / totalTime) * 100;

  return (
    <GameContainer>
      <TimerWrapper>
        {/* CSSカスタムプロパティ (--progress) を使って残り時間をCSSに渡す */}
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
  );
};

export default QuizTimer;
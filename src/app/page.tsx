import Link from 'next/link';
import { styled } from '@linaria/react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100svh;
  gap: 24px;
  padding: 24px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`;

const Description = styled.p`
  font-size: 18px;
  text-align: center;
  max-width: 500px;
`;

const StartButton = styled(Link)`
  background-color: #0070f3;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: background 0.2s;

  &:hover {
    background-color: #005ec4;
  }
`;

export default function Home() {
  return (
    <Container>
      <Title>Time Shock Quiz</Title>
      <Description>
        60秒以内にどれだけ多くのクイズに答えられるかチャレンジしよう！
      </Description>
      <StartButton href="/quiz">クイズを始める</StartButton>
    </Container>
  );
}
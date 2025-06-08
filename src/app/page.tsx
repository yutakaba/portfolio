import { styled } from '@linaria/react';
import { Button } from "@/libs/ui";

export default function Home() {
  return (
    <Container>
      <Title>Time Shock Quiz</Title>
      <Description>
        60秒以内にどれだけ多くのクイズに答えられるかチャレンジしよう！
      </Description>
      <Button href="/quiz">クイズを始める</Button>
      <Button href="/account">アカウントを作成してクイズを始める</Button>
    </Container>
  );
}

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

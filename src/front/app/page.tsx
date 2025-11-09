import { styled } from '@linaria/react';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      <Title>文系エンジニア</Title>
      <CardContainer>
        <Card
          title="Reactチュートリアル"
          description="ここは説明です"
          image="https://placehold.co"
          href="/video"
          tips="ここはヒントです"
        />
        <Card
          title="自己分析"
          description="ここは説明です"
          image="https://placehold.co"
          href="/job"
          tips="ここはヒントです"
        />
        <Card
          title="コーディングテスト対策"
          description="ここは説明です"
          image="https://placehold.co"
          href="/cording"
          tips="ここはヒントです"
        />
      </CardContainer>
    </>
  );
}

const Title = styled.h1`
  margin: 24px;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 24px;
  padding: 24px;
`;

const StyledLink = styled.p`
  text-decoration: none;
  color: #2196f3;
`;

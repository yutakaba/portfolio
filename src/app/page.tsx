import { styled } from '@linaria/react'
import Card from '@/components/Card'


export default function Home() {
  return (
    <Container>
      <Title>文系エンジニア</Title>
        <Card 
          title="タイトル" 
          description="ここは説明です" 
          image="https://placehold.co/600x400"
          href='/video'
        />
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
`

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
`

const StyledLink = styled.p`
  text-decoration: none;
  color: #2196f3;
`

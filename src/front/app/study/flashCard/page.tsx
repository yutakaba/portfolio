"use client";

import { useEffect, useState } from "react";
import { styled } from "@linaria/react";
import Link from "next/link";
import { FlashCard } from "@/types/flashCards";

export default function FlashcardsPage() {
  const [cards, setCards] = useState<FlashCard[]>([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("flashcards") || "[]");
    setCards(stored);
  }, []);

  return (
    <Container>
      <Header>
        <h1>フラッシュカード一覧</h1>
        <Link href="/flashcards/new">＋ 新規作成</Link>
      </Header>

      <List>
        {cards.map((card) => (
          <Card key={card.id}>
            <strong>{card.front}</strong>
            <p>{card.back}</p>
          </Card>
        ))}
      </List>
    </Container>
  );
}

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Card = styled.div`
  background: #f5f5f5;
  padding: 16px;
  border-radius: 8px;
`;

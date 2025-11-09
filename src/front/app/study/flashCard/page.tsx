"use client";

import { useEffect, useState } from "react";
import type { FlashCard } from "@/types/flashCards";

export default function FlashcardListPage() {
  const [cards, setCards] = useState<FlashCard[]>([]);

  useEffect(() => {
    fetch("http://localhost:8080/flashcards")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="max-w-lg mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">フラッシュカード一覧</h1>
      <ul className="space-y-3">
      {(cards ?? []).map((card) => (
        <li key={card.id} className="border p-3 rounded shadow-sm">
          <p><strong>Q:</strong> {card.front}</p>
          <p><strong>A:</strong> {card.back}</p>
        </li>
      ))}
    </ul>
    </div>
  );
}

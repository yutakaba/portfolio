"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { styled } from "@linaria/react";
import { useEffect } from "react";

type FlashCardForm = {
  front: string;
  back: string;
};

export default function NewFlashcardPage() {
  const { register, handleSubmit, watch, reset } = useForm<FlashCardForm>({
    defaultValues: { front: "", back: "" },
  });

  const router = useRouter();

  const front = watch("front");
  const back = watch("back");
  const isDisabled = !front.trim() || !back.trim();

  const onSubmit = (data: FlashCardForm) => {
    const newCard = {
      id: Date.now().toString(),
      front: data.front,
      back: data.back,
      learned: false,
    };

    // 既存のlocalStorageデータを取得
    const existing = JSON.parse(localStorage.getItem("flashcards") || "[]");

    // 新しいカードを追加して保存
    localStorage.setItem("flashcards", JSON.stringify([...existing, newCard]));

    reset();
    router.push("/flashcards");
  };

  return (
    <Container>
      <Title>新しいカードを作成</Title>

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Field>
          <label>質問（表）</label>
          <textarea {...register("front")} placeholder="例: JavaScriptとは？" />
        </Field>

        <Field>
          <label>回答（裏）</label>
          <textarea {...register("back")} placeholder="例: ブラウザ上で動くスクリプト言語" />
        </Field>

        <SubmitButton type="submit" disabled={isDisabled}>
          登録する
        </SubmitButton>
      </Form>
    </Container>
  );
}

// --- styled ---
const Container = styled.div`
  max-width: 500px;
  margin: 40px auto;
`;

const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const SubmitButton = styled.button`
  background: #0070f3;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;

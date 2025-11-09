"use client";

import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import type { FlashCard } from "@/types/flashCards";

export default function NewFlashcardPage() {
  const { register, handleSubmit, watch } = useForm<FlashCard>();
  const router = useRouter();

  const onSubmit = async (data: FlashCard) => {
    // Go API に送信
    const res = await fetch("http://localhost:8080/flashcards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      alert("登録に失敗しました");
      return;
    }

    // 登録完了 → 一覧ページへ
    router.push("/flashCard");
  };

  const front = watch("front");
  const back = watch("back");
  const isDisabled = !front?.trim() || !back?.trim();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-4 max-w-md mx-auto mt-10"
    >
      <input {...register("front")} placeholder="質問（表）" className="border p-2" />
      <input {...register("back")} placeholder="回答（裏）" className="border p-2" />
      <button
        type="submit"
        disabled={isDisabled}
        className={`p-2 rounded text-white ${
          isDisabled ? "bg-gray-400" : "bg-blue-500"
        }`}
      >
        登録
      </button>
    </form>
  );
}

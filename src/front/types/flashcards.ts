export type FlashCard = {
  id: string
  front: string
  back: string
  learned: boolean
}

// フォーム用（idやlearnedは不要）
export type FlashCardForm = Pick<FlashCard, "front" | "back">
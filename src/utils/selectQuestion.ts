import { questions, Question } from '@/data/questions';

export function getRandomQuestion(excludeIds: string[]): Question | null {
  const filtered = questions.filter((q) => !excludeIds.includes(q.id));

  const easy = filtered.filter((q) => q.difficulty === 'easy');
  const medium = filtered.filter((q) => q.difficulty === 'medium');
  const hard = filtered.filter((q) => q.difficulty === 'hard');

  const rand = Math.random();
  let pool: Question[] = [];

  if (rand < 0.6 && easy.length) pool = easy;
  else if (rand < 0.9 && medium.length) pool = medium;
  else if (hard.length) pool = hard;
  else pool = filtered;

  if (!pool.length) return null;

  return pool[Math.floor(Math.random() * pool.length)];
}

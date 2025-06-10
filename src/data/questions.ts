export type Difficulty = 'easy' | 'medium' | 'hard';

export type Question = {
  id: string;
  question: string;
  answer: string;
  difficulty: Difficulty;
};

export const questions: Question[] = [
  {
    id: 'q1',
    question: 'Linuxターミナルで今どのディレクトリにいるか確認するコマンドは？',
    answer: 'pwd',
    difficulty: 'easy',
  },
  {
    id: 'q2',
    question: 'TypeScriptは何のスーパーセット？',
    answer: 'JavaScript',
    difficulty: 'easy',
  },
  {
    id: 'q3',
    question: 'UNIX時間は何年から数えている？',
    answer: '1970',
    difficulty: 'medium',
  },
  {
    id: 'q4',
    question: 'ポート番号80は何に使われる？',
    answer: 'HTTP',
    difficulty: 'medium',
  },
  {
    id: 'q5',
    question: 'TCPとUDPの違いは？',
    answer: '信頼性',
    difficulty: 'hard',
  },
];

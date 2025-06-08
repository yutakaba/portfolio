'use client';

import { useState } from 'react';

export default function AccountPage() {

    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [icon, setIcon] = useState<File | null>(null);
    const [error, setError] = useState<string | null>(null);
    const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここで送信処理を書く（例: バリデーションやAPI送信）
    console.log({ nickname, icon });
  };

    return (
      <div>
        <h1>アカウント作成ページ</h1>
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="ニックネーム"
                value={nickname}
                onChange={(e) => setNickname(e.target.value)}
            />
            <input
                type="email"
                placeholder="メールアドレス"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password" // type="password"とすると黒字になる
                placeholder="パスワード"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <input
                type="password" // type="password"とすると黒字になる
                placeholder="パスワード確認"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <input
                type="file"
                accept="image/*"
                onChange={(e) => setIcon(e.target.files?.[0] ?? null)}
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">登録</button>
        </form>
      </div>
    );
  }
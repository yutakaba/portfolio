'use client';

import { useForm } from 'react-hook-form';

type LoginFormInputs = {
  email: string;
  password: string;
};

export default function LoginPage() {
  const { register, handleSubmit } = useForm<LoginFormInputs>();
  const onSubmit = (data: LoginFormInputs) => {
    console.log('ログイン情報:', data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 max-w-sm mx-auto mt-10">
      <input {...register('email')} placeholder="Email" className="border p-2" />
      <input
        {...register('password')}
        type="password"
        placeholder="Password"
        className="border p-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        ログイン
      </button>
    </form>
  );
}

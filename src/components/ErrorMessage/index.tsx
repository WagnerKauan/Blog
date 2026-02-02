'use client';

import Link from 'next/link';


type ErrorMessageProps = {
  pageTitle: string;
  content: string;
  resetButton?: React.ReactNode
};

export default function ErrorMessage({pageTitle, content}: ErrorMessageProps) {

  
  return (
    <div className='min-h-[320px] bg-slate-900 text-slate-100 rounded-xl mb-8 flex flex-col justify-center'>
      <div className="flex flex-col gap-4 items-center justify-center h-full p-2 text-center">
        <h1 className="text-5xl font-bold">{pageTitle}</h1>
        <div>{content}</div>

        <Link
          className="text-white bg-slate-700 py-2 px-4 rounded-lg hover:bg-slate-800 transition"
          href="/"
        >
          Voltar
        </Link>
      </div>
    </div>
  );
}

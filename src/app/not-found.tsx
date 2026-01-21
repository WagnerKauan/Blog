import Link from 'next/link';

export default function NotFound() {
  return (
    <div className='min-h-[320px] bg-slate-900 text-slate-100 rounded-xl mb-8 flex flex-col justify-center'>
      <div className="flex flex-col gap-4 items-center justify-center h-full p-2 text-center">
        <h1 className="text-5xl font-bold">404</h1>
        <p>Erro 404 - A página que você procurou não foi encontrada.</p>

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

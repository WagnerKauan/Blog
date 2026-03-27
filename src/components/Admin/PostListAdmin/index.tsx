import { findAllPostAdmin } from '@/lib/post/queries/admin';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import style from './style.module.css';
import { ButtonDeletePost } from '../ButtonDeletePost'; 
import ErrorMessage from '@/components/ErrorMessage';

export const dynamic = 'force-dynamic';

export default async function PostListAdmin() {
  const posts = await findAllPostAdmin();

  if (posts.length <= 0)
    return (
      <ErrorMessage
        pageTitle="Ei não temos postagens"
        content="Vamos criar seu primeiro post."
      />
    );

  return (
    <div
      className={clsx(
        'mb-16 border border-slate-200 shadow p-8 flex flex-col gap-6 rounded-2xl max-h-[590px] overflow-y-auto',
        style.customScrollbar,
      )}
    >
      {posts.map(post => (
        <div
          className={clsx(
            'p-4',
            !post.published && 'bg-slate-200',
            'flex justify-between',
            'shadow-md border border-slate-200 rounded-xl hover:bg-slate-200',
            'transition-all hover:translate-x-1.5',
          )}
          key={post.id}
        >
          <div className="flex items-center gap-4">
            <div className="hidden sm:block w-10 h-10 rounded-full">
              <Image
                src={post.coverImageUrl}
                alt={post.title}
                width={1200}
                height={720}
                className="w-full h-full object-cover object-center rounded-full"
              />
            </div>

            <Link
              className="line-clamp-1 sm:line-clamp-2 max-w-[95%] sm:max-w-none"
              href={`/admin/post/${post.id}`}
            >
              {post.title}
            </Link>

            {!post.published && (
              <span className="text-slate-600 text-xs italic whitespace-nowrap mr-2">
                Não publicado.
              </span>
            )}
          </div>

          <ButtonDeletePost id={post.id} title={post.title} />
        </div>
      ))}
    </div>
  );
}

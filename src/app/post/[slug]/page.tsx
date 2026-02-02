import { SinglePost } from '@/components/SinglePost';
import { SpinLoader } from '@/components/SpinLoader';
import { findPostBySlugCached } from '@/lib/post/queries';

import { Metadata } from 'next';
import { Suspense } from 'react';

type PostSlugPageParams = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PostSlugPageParams): Promise<Metadata> {
  const { slug } = await params;

  const post = await findPostBySlugCached(slug);

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function PostSlugPage({ params }: PostSlugPageParams) {
  const { slug } = await params;

  return (

    <Suspense fallback={<SpinLoader containerClassName="min-h-20 mb-16" />}>

      <SinglePost slug={slug} />

    </Suspense>
  )
}

import { findPostBySlugCached } from '@/lib/post/queries';

import { Metadata } from 'next';

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

  const post = await findPostBySlugCached(slug);

  return <div>{post.title}</div>;
}

import { FeaturedPost } from '@/components/FeaturedPost';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export default async function Home() {


  return (
    <>
      <Suspense fallback={<SpinLoader containerClassName="min-h-20 mb-16" />}>
        <FeaturedPost />

        <PostsList />
      </Suspense>
    </>
  );
}

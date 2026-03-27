import PostListAdmin from '@/components/Admin/PostListAdmin';
import { SpinLoader } from '@/components/SpinLoader';
import { Suspense } from 'react';

export const dynamic = 'force-dynamic';

export default async function AdminPostPage() {
  return (
    <Suspense fallback={<SpinLoader containerClassName="mb-16" />}>
      <PostListAdmin />
    </Suspense>
  );
}

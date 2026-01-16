import { postRepository } from '@/repositories/post';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export async function PostsList() {
  const posts = await postRepository.findAll();


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
      {posts.map(post => (
        <div className="flex flex-col gap-4 group aspect-video" key={post.id}>
          <PostCoverImage
            linkProps={{
              href: `/post/${post.slug}`,
            }}
            imageProps={{
              src: post.coverImageUrl,
              alt: post.title,
              width: 1200,
              height: 720,
            }}
          />

          <div className="flex flex-col gap-4 sm:justify-center">
            <time
              className="text-sm text-slate-600 font-bold"
              dateTime={post.createdAt}
            >
              {post.createdAt}
            </time>
            <PostHeading as="h2" url={`/post/${post.slug}`}>
              {post.title}
            </PostHeading>
            
            <p>{post.excerpt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

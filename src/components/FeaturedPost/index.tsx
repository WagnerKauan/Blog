import { findAllPublicPostsChached } from '@/lib/post/queries';
import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';
import { PostSummary } from '../PostSummary';

export async function FeaturedPost() {
  const posts = await findAllPublicPostsChached();

  const post = posts[0];

  const slug = post.slug;
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: post.coverImageUrl,
          alt: post.title,
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <PostSummary postHeading="h1" postLink={postLink} {...post} />
    </section>
  );
}

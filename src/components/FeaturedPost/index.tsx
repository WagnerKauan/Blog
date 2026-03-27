import { findAllPublicPostsChached } from '@/lib/post/queries/public';
import { PostCoverImage } from '../PostCoverImage';
import { PostSummary } from '../PostSummary';
import ErrorMessage from '../ErrorMessage';

export async function FeaturedPost() {
  const posts = await findAllPublicPostsChached();

  if(posts.length <= 0) return <ErrorMessage pageTitle="Ops..." content="Ainda não temos postagens." />

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

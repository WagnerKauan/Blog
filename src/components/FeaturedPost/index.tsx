import { PostCoverImage } from '../PostCoverImage';
import { PostHeading } from '../PostHeading';

export function FeaturedPost() {
  const slug = 'qualquer';
  const postLink = `/post/${slug}`;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
      <PostCoverImage
        linkProps={{
          href: postLink,
        }}
        imageProps={{
          src: '/images/bryen_9.png',
          alt: 'Imagem do post',
          width: 1200,
          height: 720,
          priority: true,
        }}
      />

      <div className="flex flex-col gap-4 sm:justify-center">
        <time
          className="text-sm text-slate-600 font-bold"
          dateTime="2025-04-20"
        >
          20/04/2025 10:00
        </time>
        <PostHeading as="h1" url="#">
          Como manter o foco no mundo digital
        </PostHeading>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
        voluptatem soluta iure. Aspernatur, necessitatibus commodi. Culpa,
        perspiciatis recusandae. Iste a odio sapiente! Illum suscipit maxime
        modi veritatis libero magnam blanditiis!
      </div>
    </section>
  );
}

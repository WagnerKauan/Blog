import { Container } from '@/components/Container';
import { Header } from '@/components/Header';
import { PostHeading } from '@/components/PostHeading';
import { PostsList } from '@/components/PostsList';
import { SpinLoader } from '@/components/SpinLoader';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';

export default async function Home() {
  return (
    <Container>
      <Header />

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 group">
        <Link className="w-full h-full overflow-hidden rounded-xl" href="#">
          <Image
            src="/images/bryen_0.png"
            alt="Imagem de capa do post"
            width={1200}
            height={800}
            className="group-hover:scale-105 transition object-cover object-center"
            priority
          />
        </Link>

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

      <main className="mt-10">
        <Suspense fallback={<SpinLoader />}>
          <PostsList />
        </Suspense>
      </main>

      <footer>
        <p>Footer</p>
      </footer>
    </Container>
  );
}

import { PostModel } from '@/models/post/post-model';
import { PostRepository } from './post-repository';
import { drizzleDB } from '@/db/drizzle';
import { asyncDelay } from '@/utils/async-delay';

export class DrizzlePostRepository implements PostRepository {
  async findAllPublic(): Promise<PostModel[]> {
    const posts = await drizzleDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
      where: (posts, { eq }) => eq(posts.published, true),
    });

    return posts;
  }

  async findBySlugPublic(slug: string): Promise<PostModel> {
    const post = await drizzleDB.query.posts.findFirst({
      where: (posts, { eq, and }) =>
        and(eq(posts.slug, slug), eq(posts.published, true)),
    });

    if (!post) throw new Error('Post nao encontrado para o slug informado.');

    return post;
  }

  async findById(id: string): Promise<PostModel> {
    const post = await drizzleDB.query.posts.findFirst({
      where: (posts, { eq }) => eq(posts.id, id),
    });

    if (!post) throw new Error('Post não encontrado para o id informado.');

    return post;
  }

  async findAll(): Promise<PostModel[]> {
    await asyncDelay(0)
    const posts = await drizzleDB.query.posts.findMany({
      orderBy: (posts, { desc }) => desc(posts.createdAt),
    });

    return posts;
  }
}

// (async () => {
//   const postRepository = new DrizzlePostRepository();

//   const post = await postRepository.findBySlugPublic(
//     'rotina-matinal-de-pessoas-altamente-eficazes',
//   );

//   console.log(post);
// })();

import { JsonPostRepository } from '@/repositories/post/json-post-repository';
import { drizzleDB } from '.';
import { postsTable } from './schemas';

(async () => {
  const jsonPostRepository = new JsonPostRepository();

  const posts = await jsonPostRepository.findAll();

  try {
    await drizzleDB.delete(postsTable);
    await drizzleDB.insert(postsTable).values(posts);

    console.log('Seed realizado com sucesso');
  } catch (error) {
    console.log(error);
  }
})();

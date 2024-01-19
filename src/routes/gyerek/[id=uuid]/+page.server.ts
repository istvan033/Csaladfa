import type { PageServerLoad } from './$types';
import e from '@/edgeql-js';
import { client } from '@/services/edgedb';

export const load = (async ({ params }) => {
  return {
    gyerek: await e
      .select(e.gyerek, () => ({
        ...e.gyerek['*'],
        filter_single: { id: e.uuid(params.id) },
      }))
      .run(client),
  };
}) satisfies PageServerLoad;



import * as prismic from '@prismicio/client';
import * as prismicNext from '@prismicio/next';

export const repositoryName = prismic.getRepositoryName(process.env.PRISMIC_API_ENDPOINT || '');

export const getPrismicClient = (config: any = {}) => {
  const client = prismic.createClient(process.env.PRISMIC_API_ENDPOINT || '', config);

  prismicNext.enableAutoPreviews({
    client,
    previewData: config.previewData,
    req: config.req,
  });

  return client;
};

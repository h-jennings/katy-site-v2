import { NextPage } from 'next';
import { initUrqlClient, SSRExchange, withUrqlClient } from 'next-urql';
import { cacheExchange, dedupExchange, fetchExchange } from 'urql';

const CMS_URL = `https://api-us-east-1.graphcms.com/v2/${process.env.CMS_SPACE}/master`;

export const graphCmsClient = (ssrCache: SSRExchange, preview = false) => {
  return initUrqlClient(
    {
      url: CMS_URL,
      fetchOptions: {
        headers: {
          Authorization: `Bearer ${
            !preview
              ? process.env.CMS_PROD_TOKEN
              : process.env.CMS_PREVIEW_TOKEN
          }`,
        },
      },
      exchanges: [dedupExchange, cacheExchange, ssrCache, fetchExchange],
      suspense: false,
    },
    false,
  );
};

export const withUrqlSSR = <P = unknown, IP = P>(Page: NextPage<P, IP>) => {
  return withUrqlClient(
    () => ({
      url: isSSR ? CMS_URL : 'api/graphql',
      fetchOptions: {
        headers: {
          Authorization: isSSR ? `Bearer ${process.env.CMS_PROD_TOKEN}` : '',
        },
      },
    }),
    { ssr: false, neverSuspend: true },
  )(Page);
};

// eslint-disable-next-line @typescript-eslint/no-unnecessary-condition
const isSSR = typeof window === undefined;

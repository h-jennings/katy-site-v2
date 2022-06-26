import { CMS_URL } from '@/utils/constants/cms.constants';
import { isSSR } from '@/utils/helpers/is-ssr';
import { NextPage } from 'next';
import { initUrqlClient, SSRExchange, withUrqlClient } from 'next-urql';
import { cacheExchange, dedupExchange, fetchExchange } from 'urql';

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
      url: isSSR ? CMS_URL : '/api/graphql',
      fetchOptions: {
        headers: {
          Authorization: isSSR ? `Bearer ${process.env.CMS_PROD_TOKEN}` : '',
        },
      },
    }),
    { ssr: false, neverSuspend: true },
  )(Page);
};

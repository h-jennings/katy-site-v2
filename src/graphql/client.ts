import { CMS_URL } from '@/utils/constants/cms.constants';
import { isSSR } from '@/utils/helpers/is-ssr.helpers';
import { GraphQLClient } from 'graphql-request';

const URL = isSSR ? CMS_URL : '/api/graphql';

export const createGraphCMSClient = (preview = false, url?: string) => {
  return new GraphQLClient(url ?? URL, {
    headers: {
      Authorization: `Bearer ${
        !preview ? process.env.CMS_PROD_TOKEN : process.env.CMS_PREVIEW_TOKEN
      }`,
    },
  });
};

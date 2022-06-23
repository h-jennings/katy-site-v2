import { CMS_URL } from '@/utils/constants/cms.constants';
import { GraphQLClient } from 'graphql-request';

export const createGraphCMSClient = (preview = false) => {
  return new GraphQLClient(CMS_URL, {
    headers: {
      Authorization: `Bearer ${
        !preview ? process.env.CMS_PROD_TOKEN : process.env.CMS_PREVIEW_TOKEN
      }`,
    },
  });
};

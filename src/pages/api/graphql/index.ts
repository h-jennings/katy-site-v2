import { createGraphCMSClient } from '@/graphql/client';
import { CMS_URL } from '@/utils/constants/cms.constants';
import type { NextApiRequest, NextApiResponse } from 'next';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { query, variables } = req.body;
  try {
    const client = createGraphCMSClient(variables?.preview, CMS_URL);
    const data = await client.rawRequest(query, variables);
    res.status(200).send(data);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error:', error);
    res.status(200).send('Server Error');
  }
};

export default handler;

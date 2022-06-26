import { createGraphCMSClient } from '@/graphql/client';
import {
  GetHomepageDataDocument,
  GetNowPageDataDocument,
} from '@/graphql/generated/types.generated';
import { serverSideRedirect } from '@/utils/helpers/api-route.helpers';
import { RequestDocument } from 'graphql-request';
import type { NextApiRequest, NextApiResponse } from 'next';

const VALID_SLUGS = ['/', '/now'];

const preview = async (req: NextApiRequest, res: NextApiResponse) => {
  const { secret, slug } = req.query;

  const isValidSlug = VALID_SLUGS.some((s) => s === slug);

  if (secret !== process.env.SECRET_KEY || !isValidSlug) {
    return sendUnauthorized(res, 'Invalid token or slug');
  }

  // Try and get data
  const data = await getPreviewContent(slug as string);

  if (!data) {
    return sendUnauthorized(
      res,
      'No page data to display. Slug may be invalid.',
    );
  }

  /**
   * Calling setPreviewData sets a preview cookies that turn on the preview mode.
   * Any requests to Next.js containing these cookies will be seen as preview mode
   */
  res.setPreviewData({
    maxAge: 60 * 60, // The preview mode cookies expire in 1 hour
  });

  serverSideRedirect(res, slug as string, 307);

  res.end();
};

/**
 * We want to make the query request that corresponds with the slug
 */
const getPreviewContent = (slug: string) => {
  for (const obj of REQUEST_LOOKUP) {
    if (obj.regex.test(slug)) {
      return obj.previewRequestFn();
    }
  }

  return makePreviewRequest(GetHomepageDataDocument);
};

// Add new cases here
const REQUEST_LOOKUP: {
  regex: RegExp;
  previewRequestFn: () => Promise<unknown>;
}[] = [
  {
    // This should always be last
    regex: new RegExp(/^\/now$/, 'g'),
    previewRequestFn: () => makePreviewRequest(GetNowPageDataDocument),
  },
];

const makePreviewRequest = async (query: RequestDocument, variables = {}) => {
  try {
    return await createGraphCMSClient(true).request(query, {
      ...variables,
    });
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('error:', error);
  }
};

const sendUnauthorized = (res: NextApiResponse, message: string) =>
  res.status(401).json({ message });

export default preview;

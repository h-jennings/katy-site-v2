import { NextApiResponse } from 'next';

export const serverSideRedirect = (
  res: NextApiResponse,
  destinationPath: string,
  statusCode = 301,
) => {
  res.writeHead(statusCode, { Location: destinationPath });
};

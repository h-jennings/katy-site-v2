const TITLE = 'Personal Site';
const DESCRIPTION = '';

const SEO = {
  title: TITLE,
  titleTemplate: '%s | Katy Pentz',
  description: DESCRIPTION,
  url: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL,
    title: TITLE,
    description: DESCRIPTION,
  },
  twitter: {
    handle: '@KatyPentz',
    site: '@KatyPentz',
    cardType: 'summary_large_image',
  },
};

export default SEO;

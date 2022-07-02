const TITLE = 'Personal Site';
const DESCRIPTION =
  'Katy Pentz is a privacy professional based in Richmond, Virginia. She currently works for Deloitte as a Privacy Program Manager and is open to new opportunites.';

/** @type {import('next-seo').NextSeoProps} */
const SEO = {
  title: TITLE,
  titleTemplate: '%s | Katy Pentz',
  description: DESCRIPTION,
  canonical: process.env.NEXT_PUBLIC_URL,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_URL,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_URL}/images/social-banner-default.jpg`,
      },
    ],
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

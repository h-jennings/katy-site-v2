import { SeoData } from '@/utils/types/cms-data';
import { NextSeo, NextSeoProps } from 'next-seo';

interface SeoProps {
  seo: SeoData;
  path: string;
}

export const Seo = ({ seo, path }: SeoProps) => {
  if (!seo) return null;

  const { noIndex, title, description, image } = seo;
  const hasImage = image?.url != null;
  const url = `${process.env.NEXT_PUBLIC_URL}${path}`;

  const SEO: NextSeoProps = {
    noindex: noIndex,
    nofollow: noIndex,
    title,
    canonical: url,
    description: description ?? '',
    openGraph: {
      title,
      url,
      images: hasImage
        ? [
            {
              url: image.url,
            },
          ]
        : undefined,
    },
  };
  return <NextSeo {...SEO} />;
};

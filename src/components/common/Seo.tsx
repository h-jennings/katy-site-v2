import { SeoData } from '@/utils/types/cms-data';
import { NextSeo, NextSeoProps } from 'next-seo';

interface SeoProps {
  seo: SeoData;
}

export const Seo = ({ seo }: SeoProps) => {
  if (!seo) return null;

  const { noIndex, title, description, image } = seo;
  const hasImage = image?.url != null;

  const SEO: NextSeoProps = {
    noindex: noIndex,
    nofollow: noIndex,
    title,
    description: description ?? '',
    openGraph: {
      title,
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

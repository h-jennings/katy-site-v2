import Image, { ImageLoaderProps, ImageProps } from 'next/image';

// Should map to a third party service (like Contentful)
export const loader = ({ src, width, quality }: ImageLoaderProps) => {
  return `${src}?w=${width}&q=${quality ?? 75}`;
};

export const NextImageWithLoader = ({ alt, ...rest }: ImageProps) => {
  return <Image {...rest} loader={loader} alt={alt ?? ''} />;
};

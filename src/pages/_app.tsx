import { RootLayout } from '@/components/common/RootLayout';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </>
  );
}

export default MyApp;

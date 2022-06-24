import { RootLayout } from '@/components/common/RootLayout';
import { createGraphCMSClient } from '@/graphql/client';
import {
  GetExternalLinksDocument,
  GetExternalLinksQuery,
} from '@/graphql/generated/types.generated';
import { Links } from '@/utils/types/cms-data';
import { Provider } from '@components/common/NavigationLinks/navigation-data.store';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import type { AppContext, AppProps } from 'next/app';
import App from 'next/app';
import create from 'zustand';
import '../styles/globals.css';

function MyApp({
  Component,
  pageProps,
  linksData,
}: AppProps & { linksData: Links }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Provider
        createStore={() =>
          create(() => ({
            links: linksData,
          }))
        }
      >
        <RootLayout>
          <Component {...pageProps} />
        </RootLayout>
      </Provider>
    </>
  );
}

let linksData: Links;

MyApp.getInitialProps = async (appContext: AppContext) => {
  const preview = appContext.router.isPreview;

  const appProps = await App.getInitialProps(appContext);

  if (!linksData) {
    // We really only want this to be run once
    // TODO: wrap this in a try/catch
    const data = await createGraphCMSClient(
      preview,
    ).request<GetExternalLinksQuery>(GetExternalLinksDocument);

    const { externalLinks } = data;
    const { links } = externalLinks ?? {};

    linksData = links;
  }

  return { ...appProps, linksData };
};

export default MyApp;

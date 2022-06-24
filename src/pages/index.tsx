import {
  GetHomepageDataDocument,
  GetHomepageDataQuery,
  useGetHomepageDataQuery,
} from '@/graphql/generated/types.generated';
import { graphCmsClient, withUrqlSSR } from '@/graphql/urql';
import { HeaderTextBlockPortal } from '@components/common/Header/HeaderTextBlock';
import { ProseText } from '@components/common/ProseText';
import { RichText } from '@components/common/RichText';
import { SectionCerts } from '@components/home/SectionCerts';
import { SectionExperience } from '@components/home/SectionExperience';
import { SectionFocusArea } from '@components/home/SectionFocusArea';
import { NodeRendererType } from '@graphcms/rich-text-react-renderer';
import type { GetServerSideProps } from 'next';
import { ssrExchange } from 'urql';

const Home = () => {
  const [{ data }] = useGetHomepageDataQuery();
  const { homepage } = data ?? {};
  const {
    headerTextBlock,
    areasOfFocusTextBlock,
    areasOfFocusItems,
    certificationsAndMembershipsLinks,
    experienceTable,
  } = homepage ?? {};

  return (
    <>
      <HeaderTextBlockPortal>
        <RichText
          content={headerTextBlock?.raw}
          renderers={HEADER_BLOCK_RICHTEXT}
        />
      </HeaderTextBlockPortal>
      <SectionFocusArea
        textBlock={areasOfFocusTextBlock}
        focusItems={areasOfFocusItems}
      />
      <SectionExperience experiences={experienceTable} />
      <SectionCerts links={certificationsAndMembershipsLinks} />
    </>
  );
};

const HEADER_BLOCK_RICHTEXT: NodeRendererType = {
  p: ({ children }) => (
    <ProseText
      css={{
        margin: 0,
        maxWidth: '50ch',
      }}
    >
      {children}
    </ProseText>
  ),
};

export const getServerSideProps: GetServerSideProps<{
  preview: boolean;
}> = async ({ preview = false }) => {
  const ssrCache = ssrExchange({ isClient: false });
  const client = graphCmsClient(ssrCache, preview);

  const result = await client
    ?.query<GetHomepageDataQuery>(GetHomepageDataDocument)
    .toPromise();

  if (!result?.data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      // urqlState is a keyword here so withUrqlClient can pick it up.
      urqlState: ssrCache.extractData(),
      preview,
    },
  };
};

export default withUrqlSSR(Home);

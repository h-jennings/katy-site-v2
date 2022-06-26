import {
  GetHomepageDataDocument,
  GetHomepageDataQuery,
  useGetHomepageDataQuery,
} from '@/graphql/generated/types.generated';
import { graphCmsClient, withUrqlSSR } from '@/graphql/urql';
import { HEADER_BLOCK_RICHTEXT } from '@/utils/constants/richtext.constants';
import { HeaderTextBlockPortal } from '@components/common/Header/HeaderTextBlock';
import { RichText } from '@components/common/RichText';
import { Seo } from '@components/common/Seo';
import { SectionCerts } from '@components/home/SectionCerts';
import { SectionExperience } from '@components/home/SectionExperience';
import { SectionFocusArea } from '@components/home/SectionFocusArea';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
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
    seo,
  } = homepage ?? {};

  return (
    <>
      <Seo seo={seo} />
      <HeaderTextBlockPortal>
        <RichText
          content={headerTextBlock?.raw}
          renderers={HEADER_BLOCK_RICHTEXT}
        />
      </HeaderTextBlockPortal>
      <VisuallyHidden.Root>
        <h1>Homepage</h1>
      </VisuallyHidden.Root>
      <SectionFocusArea
        textBlock={areasOfFocusTextBlock}
        focusItems={areasOfFocusItems}
      />
      <SectionExperience experiences={experienceTable} />
      <SectionCerts links={certificationsAndMembershipsLinks} />
    </>
  );
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

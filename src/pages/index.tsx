import {
  GetHomepageDataDocument,
  GetHomepageDataQuery,
  useGetHomepageDataQuery,
} from '@/graphql/generated/types.generated';
import { graphCmsClient, withUrqlSSR } from '@/graphql/urql';
import { SectionCerts } from '@components/home/SectionCerts';
import { SectionExperience } from '@components/home/SectionExperience';
import { SectionFocusArea } from '@components/home/SectionFocusArea';
import type { GetServerSideProps } from 'next';
import { ssrExchange } from 'urql';

const Home = () => {
  const [{ data }] = useGetHomepageDataQuery();
  const { homepage } = data ?? {};
  const {
    areasOfFocusTextBlock,
    areasOfFocusItems,
    certificationsAndMembershipsLinks,
    experienceTable,
  } = homepage ?? {};

  return (
    <>
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

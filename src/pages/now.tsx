import {
  GetNowPageDataDocument,
  GetNowPageDataQuery,
  useGetNowPageDataQuery,
} from '@/graphql/generated/types.generated';
import { graphCmsClient, withUrqlSSR } from '@/graphql/urql';
import { styled } from '@/styles/stitches.config';
import { HEADER_BLOCK_RICHTEXT } from '@/utils/constants/richtext.constants';
import { Box } from '@components/common/Box';
import { HeaderTextBlockPortal } from '@components/common/Header/HeaderTextBlock';
import { RichText } from '@components/common/RichText';
import { Stack } from '@components/common/Stack';
import { Text } from '@components/common/Text';
import { SectionContainer } from '@components/home/SectionContainer';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { format, parseISO } from 'date-fns';
import { GetServerSideProps } from 'next';
import { ssrExchange } from 'urql';

const Now = () => {
  const [{ data }] = useGetNowPageDataQuery();
  const { nowPage } = data ?? {};

  const { headerTextBlock, pageContent, updatedAt } = nowPage ?? {};

  const prettyDate = parseIsoToString(updatedAt);

  return (
    <>
      <HeaderTextBlockPortal>
        <RichText
          content={headerTextBlock?.content.raw}
          renderers={HEADER_BLOCK_RICHTEXT}
        />
      </HeaderTextBlockPortal>
      <SectionContainer label="Now">
        <Stack gap="7">
          <Stack gap="5">
            <Box>
              <VisuallyHidden.Root>
                <p>
                  Page was last updated on{' '}
                  <time dateTime={updatedAt}>{prettyDate}</time>
                </p>
              </VisuallyHidden.Root>
              <Text aria-hidden color="2">
                <Text color="1" inline>
                  &Delta; &mdash;
                </Text>{' '}
                {prettyDate}
              </Text>
            </Box>
            <Box
              css={{ height: 1, width: '$full', backgroundColor: '$slate6' }}
              role="separator"
            />
          </Stack>
          <div>
            <RichText content={pageContent?.raw} />
          </div>
        </Stack>
      </SectionContainer>
      <Section></Section>
    </>
  );
};

const parseIsoToString = (iso: string): string => {
  return format(parseISO(iso), 'yyyy-MM-dd');
};

const Section = styled('div', {
  paddingY: '$8-9',
  paddingX: '$3',

  '@bp1': {
    paddingX: '$6',
  },
});

export const getServerSideProps: GetServerSideProps<{
  preview: boolean;
}> = async ({ preview = false }) => {
  const ssrCache = ssrExchange({ isClient: false });
  const client = graphCmsClient(ssrCache, preview);

  const result = await client
    ?.query<GetNowPageDataQuery>(GetNowPageDataDocument)
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

export default withUrqlSSR(Now);

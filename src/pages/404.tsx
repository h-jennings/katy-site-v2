import { StyledLink } from '@components/common/Link';
import { Stack } from '@components/common/Stack';
import { H3 } from '@components/common/Text';
import { SectionContainer } from '@components/home/SectionContainer';
import { GetStaticProps } from 'next';
import { NextSeo, NextSeoProps } from 'next-seo';

const TITLE = 'Page Not Found | Hunter Jennings';
const SEO: NextSeoProps = {
  title: TITLE,
  openGraph: {
    title: TITLE,
  },
};

const Custom404 = () => (
  <>
    <NextSeo {...SEO} noindex nofollow />
    <SectionContainer label="Something went wrong">
      <Stack gap="5">
        <H3 size="2" leading="0">
          404 - Page Not Found
        </H3>
        <StyledLink href="/">Back to homepage</StyledLink>
      </Stack>
    </SectionContainer>
  </>
);

export const getStaticProps: GetStaticProps = () => ({ props: {} });

export default Custom404;

import { StyledLink } from '@components/common/Link';
import { Stack } from '@components/common/Stack';
import { Paragraph } from '@components/common/Text';
import { SectionContainer } from '@components/home/SectionContainer';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
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
    <VisuallyHidden.Root>
      <h1>404 Error Page</h1>
    </VisuallyHidden.Root>
    <SectionContainer label="Something went wrong">
      <Stack gap="5">
        <Paragraph size="2" leading="0">
          404 - Page Not Found
        </Paragraph>
        <div>
          <StyledLink href="/">Back to homepage</StyledLink>
        </div>
      </Stack>
    </SectionContainer>
  </>
);

export const getStaticProps: GetStaticProps = () => ({ props: {} });

export default Custom404;

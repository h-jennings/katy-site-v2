import { styled } from '@/styles/stitches.config';
import { Grid } from '@components/common/Grid';
import { IconArrowBottomRight } from '@components/common/icon/ArrowBottomRight';
import { ProseText } from '@components/common/ProseText';
import { Stack } from '@components/common/Stack';
import { H3 } from '@components/common/Text';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { SectionContainer } from './SectionContainer';

export const SectionFocusArea = () => {
  return (
    <SectionContainer label="I. Areas of focus">
      <Stack gap="8-9">
        <ListStack gap="6">
          <Stack as="li" gap="4">
            <H3>Privacy by design</H3>
            <Grid gap="2" columns="auto2" align="baseline">
              <IconArrowBottomRight aria-hidden color="var(--colors-text2)" />
              <ProseText color="2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </ProseText>
            </Grid>
          </Stack>
          <Stack as="li" gap="4">
            <H3>Privacy by design</H3>
            <Grid gap="2" columns="auto2" align="baseline">
              <IconArrowBottomRight aria-hidden color="var(--colors-text2)" />
              <ProseText color="2">
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum.
              </ProseText>
            </Grid>
          </Stack>
        </ListStack>
        <ProseContainer>
          <VisuallyHidden.Root>
            <h3>More Details</h3>
          </VisuallyHidden.Root>
          <ProseText>
            I support global commercial companies to build resilient data
            privacy and protection programs with the goal of providing consumers
            with data security, transparency and choice.
          </ProseText>
          <ProseText>
            I have led several privacy software implementations and developed a
            standard methodology to drive consistent delivery. Across both a
            program build and product implementation, I have been an ambassador
            to stakeholders across organizations.
          </ProseText>
          <ProseText>
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </ProseText>
          <ProseText>
            Develop and enhance privacy programs for global commercial clients
            in preparation for evolving privacy regulations, including the
            General Data Protection Regulation (GDPR) and the California
            Consumer Privacy Act (CCPA); Define and implement governance and
            operating models, stand up data subject rights processes and
            platforms, roll out change management materials, and structure
            monitoring and reporting schedules.
          </ProseText>
        </ProseContainer>
      </Stack>
    </SectionContainer>
  );
};

const ListStack = styled(Stack, {
  maxWidth: '50ch',
  listStyleType: 'none',
  margin: 0,
  padding: 0,
  '@bp3': {
    maxWidth: '45%',
  },
});

const ProseContainer = styled('div', {
  columnCount: 1,
  columnGap: 'calc(($6 * 2) + $5)',
  '> * + *': {
    marginBottom: '$6',
  },
  '> :last-of-type': {
    marginBottom: 0,
  },

  '@bp3': {
    columnCount: 2,
  },
});

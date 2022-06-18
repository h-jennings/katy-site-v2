import { GetHomepageDataQuery } from '@/graphql/generated/types.generated';
import { styled } from '@/styles/stitches.config';
import { Grid } from '@components/common/Grid';
import { IconArrowBottomRight } from '@components/common/icon/ArrowBottomRight';
import { ProseText } from '@components/common/ProseText';
import { RichText } from '@components/common/RichText';
import { Stack } from '@components/common/Stack';
import { H3 } from '@components/common/Text';
import * as VisuallyHidden from '@radix-ui/react-visually-hidden';
import { SectionContainer } from './SectionContainer';

type HomepageData = NonNullable<GetHomepageDataQuery['homepage']>;
type FocusItems = HomepageData['areasOfFocusItems'] | undefined;

interface SectionFocusAreaProps {
  textBlock?: HomepageData['areasOfFocusTextBlock'] | undefined;
  focusItems: FocusItems;
}

export const SectionFocusArea = ({
  focusItems,
  textBlock,
}: SectionFocusAreaProps) => {
  return (
    <SectionContainer label="I. Areas of focus">
      <Stack gap="8-9">
        <FocusList focusItems={focusItems} />
        <ProseContainer>
          <VisuallyHidden.Root>
            <h3>More Details</h3>
          </VisuallyHidden.Root>
          {textBlock ? <RichText content={textBlock.raw} /> : null}
        </ProseContainer>
      </Stack>
    </SectionContainer>
  );
};

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

interface FocusListProps {
  focusItems: FocusItems;
}

const FocusList = ({ focusItems }: FocusListProps) => {
  const hasFocusItems = focusItems && focusItems.length > 0;

  return hasFocusItems ? (
    <ListStack gap="6">
      {focusItems.map(({ id, title, blurb }) => (
        <Stack key={id} as="li" gap="4">
          <H3>{title}</H3>
          <Grid gap="2" columns="auto2" align="baseline">
            <IconArrowBottomRight aria-hidden color="var(--colors-text2)" />
            <ProseText color="2">{blurb}</ProseText>
          </Grid>
        </Stack>
      ))}
    </ListStack>
  ) : null;
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

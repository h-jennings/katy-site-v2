import { styled } from '@/styles/stitches.config';
import { HeadingText } from '@components/common/HeadingText';
import { PropsWithChildren } from 'react';
import { Box } from '../common/Box';

interface SectionContainerProps {
  label: string;
}

export const SectionContainer = ({
  label,
  children,
}: PropsWithChildren<SectionContainerProps>) => {
  return (
    <Section>
      <InnerGrid>
        <HeadingText css={{ fontSize: '$1', '@bp3': { fontSize: '$0' } }}>
          {label}
        </HeadingText>
        <Box css={{ height: '$full' }}>{children}</Box>
      </InnerGrid>
    </Section>
  );
};

const InnerGrid = styled('div', {
  display: 'grid',
  gridTemplateColumns: ' 1fr',
  rowGap: '$8-9',
  columnGap: '$6',
  alignItems: 'baseline',
  '@bp3': {
    gridTemplateColumns: '200px 1fr',
  },
});

const Section = styled('div', {
  paddingY: '$8-9',
  paddingX: '$3',

  '@bp1': {
    paddingX: '$6',
  },
});

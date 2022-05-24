import { styled } from '@/styles/stitches.config';
import { COLUMN_GAP, GAP } from '@/utils/constants/gap.constants';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <>
      <Text>regular</Text>
      <Text>
        <em>italic</em>
      </Text>
      <Text>
        <strong>bold</strong>
      </Text>
      <Text>
        <strong>
          <em>bold italic</em>
        </strong>
      </Text>
      <Text family="condensed">Condensed</Text>
      <Text family="condensed">
        <em>Condensed Italic</em>
      </Text>
      <Text>
        This is some content{' '}
        <Text gap="9" as="span" family="serif">
          Serif italic
        </Text>{' '}
        and some other text.
      </Text>
    </>
  );
};

const Text = styled('p', {
  variants: {
    family: {
      primary: {
        fontFamily: '$primary',
      },
      condensed: {
        fontFamily: '$serif_condensed',
        fontWeight: 700,
      },
      serif: {
        fontFamily: '$serif',
      },
    },
    gap: GAP,
    gapX: COLUMN_GAP,
  },
  defaultVariants: {
    family: 'primary',
  },
});

export default Home;

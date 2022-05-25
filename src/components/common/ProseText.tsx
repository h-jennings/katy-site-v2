import { styled } from '@/styles/stitches.config';

export const ProseText = styled('p', {
  fontSize: '$1',
  color: '$text1',

  variants: {
    limitX: {
      true: {
        maxWidth: '60ch',
      },
    },
  },
});

import { styled } from '@/styles/stitches.config';

export const ProseText = styled('p', {
  fontSize: '$0',
  lineHeight: '$4',

  variants: {
    limitX: {
      true: {
        maxWidth: '$prose',
      },
    },
    color: {
      1: {
        color: '$text1',
      },
      2: {
        color: '$text2',
      },
    },
  },

  defaultVariants: {
    limitX: 'true',
    color: '1',
  },
});

import { slate } from '@radix-ui/colors';
import { createStitches } from '@stitches/react';

export const { getCssText } = createStitches({
  theme: {
    fonts: {
      primary: 'sans-serif',
      serif: 'serif',
    },
    colors: {
      ...slate,

      uiBg: '$slate1',
      text1: '$slate12',
    },
  },
});

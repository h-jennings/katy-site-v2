import { slate } from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';

export const { getCssText, styled, css, theme } = createStitches({
  theme: {
    fonts: {
      primary: '"Supreme", sans-serif',
      serif: '"Junicode", serif',
      serif_condensed: '"JunicodeCondensed", serif',
    },
    colors: {
      ...slate,
      uiBg: '$slate1',
      text1: '$slate12',
      text2: '$slate10',
    },
    transitions: {
      default: '225ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    fontSizes: {
      /* @link https://utopia.fyi/type/calculator?c=360,14,1.333,1040,16,1.333,6,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */
      '-1': 'clamp(0.66rem, calc(0.61rem + 0.22vw), 0.75rem)',
      0: 'clamp(0.88rem, calc(0.81rem + 0.29vw), 1.00rem)',
      1: 'clamp(1.17rem, calc(1.08rem + 0.39vw), 1.33rem)',
      2: 'clamp(1.56rem, calc(1.44rem + 0.52vw), 1.78rem)',
      3: 'clamp(2.07rem, calc(1.92rem + 0.70vw), 2.37rem)',
      4: 'clamp(2.76rem, calc(2.55rem + 0.93vw), 3.16rem)',
      5: 'clamp(3.68rem, calc(3.40rem + 1.24vw), 4.21rem)',
      6: 'clamp(4.91rem, calc(4.54rem + 1.65vw), 5.61rem)',
    },
    lineHeights: {
      0: 1,
      1: 1.1,
      2: 1.25,
      3: 1.33,
      4: 1.5,
    },
    fontWeights: {
      regular: 400,
      bold: 700,
    },
    space: {
      /* @link https://utopia.fyi/space/calculator?c=360,16,1.2,1024,20,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */
      // 4 <-> 5
      1: 'clamp(0.25rem, calc(0.22rem + 0.15vw), 0.31rem)',
      // 8 <-> 10
      2: 'clamp(0.50rem, calc(0.43rem + 0.30vw), 0.63rem)',
      // 12 <-> 15
      3: 'clamp(0.75rem, calc(0.65rem + 0.45vw), 0.94rem)',
      // 16 <-> 20
      4: 'clamp(1.00rem, calc(0.86rem + 0.60vw), 1.25rem)',
      // 24 <-> 30
      5: 'clamp(1.50rem, calc(1.30rem + 0.90vw), 1.88rem)',
      // 32 <-> 40
      6: 'clamp(2.00rem, calc(1.73rem + 1.20vw), 2.50rem)',
      // 48 <-> 60
      7: 'clamp(3.00rem, calc(2.59rem + 1.81vw), 3.75rem)',
      // 64 <-> 80
      8: 'clamp(4.00rem, calc(3.46rem + 2.41vw), 5.00rem)',
      // 96 <-> 120
      9: 'clamp(6.00rem, calc(5.19rem + 3.61vw), 7.50rem)',

      // Steps
      // 4 <-> 10
      '1-2': 'clamp(0.25rem, calc(0.05rem + 0.90vw), 0.63rem)',
      // 8 <-> 15
      '2-3': 'clamp(0.50rem, calc(0.26rem + 1.05vw), 0.94rem)',
      // 12 <-> 20
      '3-4': 'clamp(0.75rem, calc(0.48rem + 1.20vw), 1.25rem)',
      // 16 <-> 30
      '4-5': 'clamp(1.00rem, calc(0.53rem + 2.11vw), 1.88rem)',
      // 24 <-> 40
      '5-6': 'clamp(1.50rem, calc(0.96rem + 2.41vw), 2.50rem)',
      // 32 <-> 60
      '6-7': 'clamp(2.00rem, calc(1.05rem + 4.22vw), 3.75rem)',
      // 32 <-> 60
      '7-8': 'clamp(3.00rem, calc(1.92rem + 4.82vw), 5.00rem)',
      // 64 <-> 120
      '8-9': 'clamp(4.00rem, calc(2.10rem + 8.43vw), 7.50rem)',
    },
    sizes: {
      full: '100%',
      screenW: '100vw',
      screenH: '100vh',
      channel: '1380px',
      desktop: '1440px',
      prose: '60ch',
    },
    radii: {
      pill: '9999px',
      circle: '50%',
    },
    zIndices: {
      init: 0,
      nuclear: 9999,
    },
  },
  media: {
    bp1: '(width >= 520px)',
    bp2: '(width >= 768px)',
    bp3: '(width >= 1040px)',
    bp4: '(width >= 1800px)',
  },
  utils: {
    marginX: (value: Stitches.PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    marginY: (value: Stitches.PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    paddingX: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    paddingY: (value: Stitches.PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    hover: (val: Stitches.CSSProperties) => ({
      '@media(hover: hover)': {
        '&:hover': val,
      },
    }),
  },
});

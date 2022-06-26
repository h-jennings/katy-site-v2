import { brown, slate } from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
import { createStitches } from '@stitches/react';
import { createFluidValue } from './create-fluid-value';

const getConfigFluidValue = (minSize: number, maxSize: number) =>
  createFluidValue(minSize, maxSize, 360, 1040);

export const { getCssText, styled, css, theme } = createStitches({
  theme: {
    fonts: {
      primary: '"Supreme", sans-serif',
      serif: '"Junicode", serif',
      serif_condensed: '"JunicodeCondensed", serif',
    },
    colors: {
      ...slate,
      ...brown,
      uiBg: '$slate1',
      text1: '$slate12',
      text2: '$slate11',
      action: '$brown11',
      actionHover: '$brown12',
    },
    transitions: {
      default: '225ms cubic-bezier(0.4, 0, 0.2, 1)',
    },
    fontSizes: {
      /* @link https://utopia.fyi/type/calculator?c=360,14,1.333,1040,16,1.333,6,1,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l */
      '-1': getConfigFluidValue(14, 16),
      0: 16,
      1: getConfigFluidValue(19, 21),
      2: getConfigFluidValue(25, 28),
      3: getConfigFluidValue(33, 38),
      4: getConfigFluidValue(44, 51),
      5: getConfigFluidValue(59, 67),
      6: getConfigFluidValue(78, 90),
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
      1: getConfigFluidValue(4, 5),
      // 8 <-> 10
      2: getConfigFluidValue(8, 10),
      // 12 <-> 15
      3: getConfigFluidValue(12, 15),
      // 16 <-> 20
      4: getConfigFluidValue(16, 20),
      // 24 <-> 30
      5: getConfigFluidValue(24, 30),
      // 32 <-> 40
      6: getConfigFluidValue(32, 40),
      // 48 <-> 60
      7: getConfigFluidValue(48, 60),
      // 64 <-> 80
      8: getConfigFluidValue(64, 80),
      // 96 <-> 120
      9: getConfigFluidValue(96, 120),

      // Steps
      // 4 <-> 10
      '1-2': getConfigFluidValue(4, 10),
      // 8 <-> 15
      '2-3': getConfigFluidValue(8, 15),
      // 12 <-> 20
      '3-4': getConfigFluidValue(12, 20),
      // 16 <-> 30
      '4-5': getConfigFluidValue(16, 30),
      // 24 <-> 40
      '5-6': getConfigFluidValue(24, 40),
      // 32 <-> 60
      '6-7': getConfigFluidValue(32, 60),
      // 48 <-> 80
      '7-8': getConfigFluidValue(48, 80),
      // 64 <-> 120
      '8-9': getConfigFluidValue(64, 120),
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
    '<bp1': '(width < 520px)',
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

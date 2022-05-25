import { css, styled } from '@/styles/stitches.config';
import { FONT_SIZE_VARIANTS } from '@/utils/constants/font-sizes.constants';

export const text = css({
  variants: {
    inline: {
      true: {
        display: 'inline',
      },
      false: {
        display: 'block',
      },
    },
    size: FONT_SIZE_VARIANTS,
    color: {
      1: {
        color: '$text1',
      },
      2: {
        color: '$text2',
      },
    },
    leading: {
      0: {
        lineHeight: '$0',
      },
      1: {
        lineHeight: '$1',
      },
      2: {
        lineHeight: '$2',
      },
      3: {
        lineHeight: '$3',
      },
      4: {
        lineHeight: '$4',
      },
    },
    style: {
      normal: {
        fontStyle: 'normal',
      },
      italic: {
        fontStyle: 'italic',
      },
    },
    weight: {
      regular: {
        fontWeight: '$regular',
      },
      bold: {
        fontWeight: '$bold',
      },
    },
  },
  defaultVariants: {
    size: '0',
    color: '1',
    weight: 'regular',
    leading: '2',
    style: 'normal',
    inline: false,
  },
});

export const Text = styled('span', text);

// Html Elements
export const Quote = styled('q', text);
export const Paragraph = styled('p', text);
export const ListItem = styled('li', text);
export const Small = styled('small', text);
export const Deleted = styled('del', text);
export const H1 = styled('h1', text);
export const H2 = styled('h2', text);
export const H3 = styled('h3', text);
export const H4 = styled('h4', text);
export const H5 = styled('h5', text);
export const H6 = styled('h6', text);

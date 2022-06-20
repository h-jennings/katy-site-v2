import { styled } from '@/styles/stitches.config';

export const Tbody = styled('tbody', {
  width: '$full',
});

export const Tfoot = styled('tfoot', {});

export const Tr = styled('tr', {});

export const Th = styled('th', {
  fontWeight: 'unset',
  textAlign: 'start',
  fontSize: '$0',
  paddingY: '$3',
  paddingX: '$2',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
  },
  defaultVariants: {
    align: 'start',
  },
});

export const Td = styled('td', {
  paddingY: '$3',
  paddingX: '$2',
  verticalAlign: 'top',
  borderTop: '1px solid $slate6',
  fontSize: '$0',
  variants: {
    align: {
      start: {
        textAlign: 'start',
      },
      center: {
        textAlign: 'center',
      },
      end: {
        textAlign: 'end',
      },
    },
  },
  defaultVariants: {
    align: 'start',
  },
});

export const Thead = styled('thead', {
  [`& ${Th}`]: {
    fontSize: '$0',
    color: '$text1',
  },
  [`& ${Td}`]: {
    fontSize: '$0',
    color: '$text1',
  },
});

export const Table = styled('table', {
  width: '$full',
  tableLayout: 'fixed',
  borderSpacing: 0,
});

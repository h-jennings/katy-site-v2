import { styled } from '@/styles/stitches.config';
import { ProseText } from './ProseText';

export const BlockQuote = styled('blockquote', {
  paddingLeft: '$5',
  paddingY: '$5',
  marginLeft: 0,
  backgroundColor: '$slate3',
  borderLeft: '4px solid $slate10',
  fontSize: '$0',
  color: '$text1',
  borderRadius: '5px',
  [`& > ${ProseText}`]: {
    fontSize: '$0',
    color: '$text1',
    '&:last-of-type': {
      margin: 0,
    },
  },
  marginBottom: '$4',
});

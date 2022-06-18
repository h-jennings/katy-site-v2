import { styled } from '@/styles/stitches.config';

export const StyledList = styled('ul', {
  listStyleType: 'disc',
  margin: 0,
  marginBottom: '$4',
  padding: 0,
  paddingLeft: '$5',
  'ul,ol': {
    marginTop: '$3',
    marginBottom: '$3',
  },
});

export const UnstyledList = styled('ul', {
  listStyleType: 'none',
  margin: 0,
  padding: 0,
});

import { styled } from '@/styles/stitches.config';

export const ChannelOuter = styled('div', {
  display: 'flex',
  width: '$full',
  flexDirection: 'column',
  alignItems: 'center',
});

export const ChannelInner = styled('div', {
  position: 'relative',
  width: '$full',
  maxWidth: '$channel',
});

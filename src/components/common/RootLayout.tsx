import { styled } from '@/styles/stitches.config';
import * as React from 'react';
import { ChannelInner, ChannelOuter } from './Channel';
import { Header } from './Header';

export const RootLayout = ({ children }: React.PropsWithChildren<unknown>) => {
  return (
    <Container>
      <Header />
      <ChannelOuter css={{ flex: 1 }}>
        <ChannelInner>{children}</ChannelInner>
      </ChannelOuter>
      <Footer />
    </Container>
  );
};

const Container = styled('div', {
  width: '$full',
  backgroundColor: '$uiBg',
  minHeight: '$screenH',
  display: 'flex',
  alignItems: 'center',
  flexFlow: 'column',
  height: '$full',
  paddingX: '$3',
});

const Footer = () => (
  <ChannelOuter as="footer">
    <ChannelInner>footer</ChannelInner>
  </ChannelOuter>
);

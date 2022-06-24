import { styled } from '@/styles/stitches.config';
import * as React from 'react';
import { ChannelInner, ChannelOuter } from '../Channel';
import { Footer } from '../Footer';
import { Header } from '../Header/Header';
import { HeaderTextBlockProvider } from '../Header/HeaderTextBlock';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <HeaderTextBlockProvider>
        <Header />
        <ChannelOuter css={{ flex: 1 }}>
          <ChannelInner>{children}</ChannelInner>
        </ChannelOuter>
      </HeaderTextBlockProvider>
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
  flexDirection: 'column',
  height: '$full',
  paddingX: '$3',
});

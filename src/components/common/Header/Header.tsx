import { styled } from '@/styles/stitches.config';
import NextLink from 'next/link';
import * as React from 'react';
import { ChannelInner, ChannelOuter } from '../Channel';
import { Flex } from '../Flex';
import { NavigationLinks } from '../NavigationLinks/NavigationLinks';
import { Text } from '../Text';
import { HeaderTextBlock } from './HeaderTextBlock';

export const Header = React.memo(() => (
  <ChannelOuter>
    <ChannelInner>
      <HeaderWrapper>
        <ContentWrapper>
          <HeaderTextBlock />
        </ContentWrapper>
        <ContentWrapper as="nav">
          <Flex justify="between">
            <div>
              <NextLink href="/">
                <a title="Back to homepage" aria-label="Link to homepage">
                  <Text aria-hidden size="-1" leading="4" inline={false}>
                    Katy Pentz <br />
                    <Text size="0" color="2" leading="4">
                      Privacy Professional
                    </Text>
                  </Text>
                </a>
              </NextLink>
            </div>
            <NavigationLinks />
          </Flex>
        </ContentWrapper>
      </HeaderWrapper>
    </ChannelInner>
  </ChannelOuter>
));

Header.displayName = 'Header';

const HeaderWrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column-reverse',

  '@bp3': {
    flexDirection: 'row',
  },
});

const ContentWrapper = styled('div', {
  paddingX: '$3',
  paddingY: '$6',
  flex: 1,

  '@bp1': {
    paddingX: '$6',
  },
});

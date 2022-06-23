import { styled } from '@/styles/stitches.config';
import NextLink from 'next/link';
import { ChannelInner, ChannelOuter } from './Channel';
import { Flex } from './Flex';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Paragraph, Text } from './Text';

export const Header = () => (
  <ChannelOuter>
    <ChannelInner>
      <HeaderWrapper>
        <ContentWrapper>
          {/* TODO: Wire up to CMS */}
          <Paragraph size="0" leading="4" css={{ maxWidth: '50ch' }}>
            Kathryn Pentz is a privacy professional based in Richmond, Virginia.
            She currently works for Deloitte as a Privacy Program Manager and is
            open to new opportunites.
          </Paragraph>
        </ContentWrapper>
        <ContentWrapper as="nav">
          <Flex justify="between">
            <div>
              <NextLink href="/">
                <a aria-label="Link to homepage">
                  <Text aria-hidden size="0" leading="4" inline={false}>
                    Kathryn Pentz <br />
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
);

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

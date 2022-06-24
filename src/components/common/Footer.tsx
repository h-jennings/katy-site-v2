import { styled } from '@/styles/stitches.config';
import NextLink from 'next/link';
import * as React from 'react';
import { Box } from './Box';
import { ChannelInner, ChannelOuter } from './Channel';
import { Flex } from './Flex';
import { Grid } from './Grid';
import { HeadingText } from './HeadingText';
import { NavigationLinks } from './NavigationLinks/NavigationLinks';
import { Stack } from './Stack';
import { Text } from './Text';

export const Footer = React.memo(() => (
  <ChannelOuter as="footer">
    <ChannelInner css={{ borderTop: '1px solid $slate6' }}>
      <ContentWrapper>
        <Stack gap="8">
          <Stack gap="7">
            <Grid columns="2">
              <Box
                css={{
                  justifySelf: 'start',
                  paddingRight: '$6',
                  '@bp1': {
                    justifySelf: 'end',
                  },
                }}
              >
                <HeadingText css={{ textAlign: 'right' }}>Contact</HeadingText>
              </Box>
              <Box css={{ paddingLeft: '$6' }}>
                <NavigationLinks />
              </Box>
            </Grid>
            <Grid columns="2">
              <HeadingText>Credits</HeadingText>
              <Box css={{ paddingLeft: '$6' }}>
                <NextLink href="/">
                  <a style={{ display: 'inline-flex' }}>
                    <Text size="0" color="1" leading="3">
                      Design and Development
                      <br /> by Hunter Jennings
                    </Text>
                  </a>
                </NextLink>
              </Box>
            </Grid>
          </Stack>
          <Flex justify="between" align="end">
            <Box>
              <Time />
            </Box>
            <Box>
              <BigYear />
            </Box>
          </Flex>
        </Stack>
      </ContentWrapper>
    </ChannelInner>
  </ChannelOuter>
));

Footer.displayName = 'Footer';

const ContentWrapper = styled('div', {
  paddingTop: '$8',
  paddingBottom: '$6',
  paddingX: '$3',

  '@bp1': {
    paddingX: '$6',
  },
});

const BigYear = () => {
  return (
    <Text
      weight="bold"
      leading="0"
      size={{ '@initial': '5', '@bp1': '6' }}
      css={{ fontFamily: '$serif_condensed' }}
    >
      &copy;{new Date().getFullYear()}
    </Text>
  );
};

const Time = () => {
  const [currentTime, setTime] = React.useState<{
    pretty: string;
    twentyFour: string;
  }>(() => {
    const [pretty, twentyFour] = getCurrentTimeFormatted();
    return { pretty, twentyFour };
  });

  React.useEffect(() => {
    const tick = setInterval(() => {
      const [pretty, twentyFour] = getCurrentTimeFormatted();

      setTime({ pretty, twentyFour });
    }, 1000);

    return () => clearInterval(tick);
  }, []);
  return (
    <Stack gap="1">
      <Text leading="0" size="0" dateTime={currentTime.twentyFour} as="time">
        {currentTime.pretty}
      </Text>
      <Text leading="0" size="0">
        Richmond, VA
      </Text>
    </Stack>
  );
};

const getCurrentTimeFormatted = (): [string, string] => {
  const time = new Date().getTime();
  const pretty = formatter.format(time);
  const twentyFour = formatterTwentyFour.format(time);

  return [pretty, twentyFour];
};

const formatter = new Intl.DateTimeFormat('en', {
  timeZone: 'America/New_York',
  timeStyle: 'short',
});

const formatterTwentyFour = new Intl.DateTimeFormat('en', {
  timeZone: 'America/New_York',
  timeStyle: 'short',
  hour12: false,
});

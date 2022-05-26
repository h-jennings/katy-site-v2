import { useClipboard } from '@/utils/hooks/use-clipboard';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { motion } from 'framer-motion';
import * as React from 'react';
import { Flex } from './Flex';
import { Grid } from './Grid';
import { IconCheck } from './icon/Check';
import { IconClipboard } from './icon/Clipboard';
import { StyledLink, StyledLinkButton } from './Link';
import { Stack } from './Stack';

const LINKS = {
  linkedin: {
    text: 'linkedin',
    href: 'https://www.linkedin.com/in/katy-pentz-736a9579',
  },
  readcv: {
    text: 'read.cv',
    href: '/',
  },
  twitter: {
    text: 'twitter',
    href: 'https://twitter.com/KatyPentz',
  },
} as const;

const EMAIL = 'pentz.katy@gmail.com';

export const NavigationLinks = () => {
  const linkList = Object.entries(LINKS).map(([, { href, text }]) => (
    <Flex key={text}>
      <StyledLink href={href}>{text}</StyledLink>
    </Flex>
  ));

  return (
    <Stack gap="2">
      <Email />
      {linkList}
    </Stack>
  );
};

const Email = () => {
  const [hovered, setHovered] = React.useState(false);
  const { hasCopied, onCopy } = useClipboard(EMAIL);

  return (
    <ToastPrimitive.Provider>
      <Grid
        gap="2"
        align="center"
        css={{ gridTemplateColumns: 'min-content min-content' }}
      >
        <MotionButton
          onHoverStart={() => setHovered(true)}
          onHoverEnd={() => setHovered(false)}
          aria-label="Copy email to clipboard"
          onClick={onCopy}
          css={{ display: 'inline-block' }}
        >
          {EMAIL}
        </MotionButton>
        <motion.div
          initial="hidden"
          animate={hovered ? 'visible' : 'hidden'}
          variants={variants}
          style={{ display: 'flex' }}
        >
          {hasCopied ? <IconCheck /> : <IconClipboard />}
        </motion.div>
      </Grid>
    </ToastPrimitive.Provider>
  );
};

const MotionButton = motion(StyledLinkButton);

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

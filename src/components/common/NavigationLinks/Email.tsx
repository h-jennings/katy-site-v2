import { css } from '@/styles/stitches.config';
import { useClipboard } from '@/utils/hooks/use-clipboard';
import { motion, Variants } from 'framer-motion';
import * as React from 'react';
import { Grid } from '../Grid';
import { IconCheck } from '../icon/Check';
import { IconClipboard } from '../icon/Clipboard';
import { StyledLinkButton } from '../Link';

const EMAIL = 'pentz.katy@gmail.com';

export const Email = () => {
  const [hovered, setHovered] = React.useState(false);
  const { hasCopied, onCopy } = useClipboard(EMAIL);

  return (
    <Grid
      gap="2"
      align="center"
      css={{ gridTemplateColumns: 'min-content min-content' }}
    >
      <MotionButton
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        onTouchEnd={() => setHovered(false)}
        aria-label="Copy email to clipboard"
        onClick={onCopy}
        css={{ display: 'inline-block', color: '$text2' }}
      >
        <span aria-hidden>
          <span className={hideOn({ device: 'mobile' })}>
            pentz.katy@gmail.com
          </span>
          <span className={hideOn({ device: 'aboveMobile' })}>email</span>
        </span>
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
  );
};

const hideOn = css({
  variants: {
    device: {
      mobile: {
        '@<bp1': {
          display: 'none',
        },
      },
      aboveMobile: {
        '@bp1': {
          display: 'none',
        },
      },
    },
  },
});

const MotionButton = motion(StyledLinkButton);

const variants: Variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0, transition: { duration: 0.8 } },
};

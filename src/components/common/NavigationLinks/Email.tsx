import { useClipboard } from '@/utils/hooks/use-clipboard';
import { motion } from 'framer-motion';
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
        aria-label="Copy email to clipboard"
        onClick={onCopy}
        css={{ display: 'inline-block', color: '$text2' }}
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
  );
};

const MotionButton = motion(StyledLinkButton);

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

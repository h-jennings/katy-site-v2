import { css, styled } from '@/styles/stitches.config';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const PreviewModeControls = () => {
  const { isPreview } = useRouter();

  if (!isPreview) return null;

  return (
    <Wrapper>
      <NextLink href="api/preview/exit">
        <a className={linkStyles()}>Exit Preview</a>
      </NextLink>
    </Wrapper>
  );
};

const linkStyles = css({
  paddingX: '$5',
  height: 40,
  borderRadius: 5,
  backgroundColor: '$slate12',
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: '$slate1',
});

const Wrapper = styled('div', {
  position: 'fixed',
  bottom: '$4',
  left: '$4',
  zIndex: '$nuclear',
});

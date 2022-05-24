import { styled } from '@/styles/stitches.config';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

export const PreviewModeControls = () => {
  const { isPreview } = useRouter();

  if (!isPreview) return null;

  return (
    <Wrapper>
      <NextLink href="api/preview/exit">
        <a>Exit Preview</a>
      </NextLink>
    </Wrapper>
  );
};

const Wrapper = styled('div', {
  position: 'fixed',
  bottom: '$2',
  left: '$2',
  zIndex: '$nuclear',
});

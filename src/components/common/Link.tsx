import { css, styled } from '@/styles/stitches.config';
import NextLink from 'next/link';
import * as React from 'react';

interface LinkProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href?: string;
  openInNewTab?: boolean;
  target?: string;
  rel?: string;
}

export const Link = React.forwardRef<
  HTMLAnchorElement,
  React.PropsWithChildren<LinkProps>
>(
  (
    { href = '/', children, openInNewTab, rel, target, ...rest },
    forwardedRef,
  ) => (
    <NextLink href={href} passHref>
      <a
        {...rest}
        rel={openInNewTab ? 'noopener norefferer' : rel}
        target={openInNewTab ? '_blank' : target}
        ref={forwardedRef}
      >
        {children}
      </a>
    </NextLink>
  ),
);

Link.displayName = 'Link';

const linkStyles = css({
  display: 'inline-block',
  fontFamily: '$primary',
  cursor: 'pointer',
  lineHeight: '$0',
  color: '$action',
  transition: '$default',
  fontSize: '$0',
  hover: {
    color: '$actionHover',
  },
});

const buttonReset = css({
  border: 'none',
  padding: 0,
  width: 'auto',
  overflow: 'visible',
  background: 'transparent',
  color: 'inherit',
  lineHeight: 'normal',
  fontSmooth: 'inherit',
  appearance: 'none',
  cursor: 'pointer',
});

export const StyledLink = styled(Link, linkStyles);

export const StyledLinkButton = styled('button', buttonReset, linkStyles);

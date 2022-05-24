import { css } from '@stitches/react';
import NextLink from 'next/link';
import * as React from 'react';

type LinkBoxProps = React.HtmlHTMLAttributes<HTMLDivElement>;
export type LinkBoxRef = HTMLDivElement;

export const LinkBox = React.forwardRef<LinkBoxRef, LinkBoxProps>(
  ({ className, ...rest }, forwardedRef) => {
    return (
      <div
        {...rest}
        className={`linkbox ${linkBoxStyles()} ${className}`}
        ref={forwardedRef}
      />
    );
  },
);

LinkBox.displayName = 'LinkBox';

const linkBoxStyles = css({
  position: 'relative',
  'a[href]:not(.linkbox__overlay), abbr[title]': {
    position: 'relative',
    zIndex: '1',
  },
});

interface LinkOverlayProps extends React.HtmlHTMLAttributes<HTMLAnchorElement> {
  href: string;
  openInNewTab?: boolean;
  target?: string;
  rel?: string;
}
export type LinkOverlayRef = HTMLAnchorElement;

export const LinkOverlay = React.forwardRef<LinkOverlayRef, LinkOverlayProps>(
  (props, forwardedRef) => {
    const { openInNewTab, target, rel, className, children, href, ...rest } =
      props;

    return (
      <NextLink href={href} passHref>
        <a
          {...rest}
          className={`linkbox__overlay ${linkOverlay()} ${className}`}
          rel={openInNewTab ? 'noopener norefferer' : rel}
          target={openInNewTab ? '_blank' : target}
          ref={forwardedRef}
        >
          {children}
        </a>
      </NextLink>
    );
  },
);

LinkOverlay.displayName = 'LinkOverlay';

const linkOverlay = css({
  position: 'static',
  '&::before': {
    content: "''",
    cursor: 'inherit',
    d: 'block',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 1,
    width: '$full',
    height: '$full',
  },
});

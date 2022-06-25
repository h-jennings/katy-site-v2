import {
  NodeRendererType,
  RichText as GRichText,
} from '@graphcms/rich-text-react-renderer';
import { RichTextContent } from '@graphcms/rich-text-types';
import { BlockQuote } from './BlockQuote';
import { StyledLink } from './Link';
import { StyledList } from './List';
import { ProseText } from './ProseText';
import { H3, H4, H5, H6, ListItem, Text } from './Text';

interface RichTextProps {
  content: RichTextContent;
  renderers?: NodeRendererType;
}

export const RichText = ({ content, renderers }: RichTextProps) => {
  const combinedRenderers = { ...DEFAULT_RENDERERS, ...renderers };
  return <GRichText content={content} renderers={combinedRenderers} />;
};

const DEFAULT_RENDERERS: NodeRendererType = {
  h1: ({ children }) => (
    <H3 weight="bold" leading="0" size="1" css={{ marginBottom: '$5' }}>
      {children}
    </H3>
  ),
  h2: ({ children }) => (
    <H3 weight="bold" leading="0" size="1" css={{ marginBottom: '$5' }}>
      {children}
    </H3>
  ),
  h3: ({ children }) => (
    <H3
      weight="bold"
      leading="0"
      size="0"
      color="2"
      css={{ marginBottom: '$5' }}
    >
      {children}
    </H3>
  ),
  h4: ({ children }) => (
    <H4 leading="0" size="0" color="2" css={{ marginBottom: '$5' }}>
      {children}
    </H4>
  ),
  h5: ({ children }) => (
    <H5 leading="0" size="0" color="2" css={{ marginBottom: '$5' }}>
      {children}
    </H5>
  ),
  h6: ({ children }) => (
    <H6 leading="0" size="0" color="2" css={{ marginBottom: '$5' }}>
      {children}
    </H6>
  ),
  p: ({ children }) => (
    <ProseText
      css={{
        marginBottom: '$4',
        '&:last-of-type': { marginBottom: 0 },
      }}
    >
      {children}
    </ProseText>
  ),
  italic: ({ children }) => (
    <Text
      as="i"
      inline
      css={{
        color: 'inherit',
        fontFamily: '$serif_condensed',
        fontStyle: 'italic',
      }}
    >
      {children}
    </Text>
  ),
  a: ({ children, openInNewTab, href, rel, ...rest }) => (
    <StyledLink
      href={href}
      openInNewTab={openInNewTab}
      rel={rel}
      {...rest}
      css={{ textDecoration: 'underline' }}
    >
      {children}
    </StyledLink>
  ),
  ul: ({ children }) => <StyledList>{children}</StyledList>,
  ol: ({ children }) => (
    <StyledList as="ol" css={{ listStyleType: 'number' }}>
      {children}
    </StyledList>
  ),
  li: ({ children }) => (
    <ListItem
      leading="0"
      css={{
        marginBottom: '$3',
        display: 'list-item',
        '&:last-of-type': { marginBottom: 0 },
      }}
    >
      {children}
    </ListItem>
  ),
  blockquote: ({ children }) => <BlockQuote>{children}</BlockQuote>,
};

import { ProseText } from '@components/common/ProseText';
import { NodeRendererType } from '@graphcms/rich-text-react-renderer';

export const HEADER_BLOCK_RICHTEXT: NodeRendererType = {
  p: ({ children }) => (
    <ProseText
      css={{
        margin: 0,
        maxWidth: '50ch',
      }}
    >
      {children}
    </ProseText>
  ),
};

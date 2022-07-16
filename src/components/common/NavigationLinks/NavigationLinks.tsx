import { Flex } from '../Flex';
import { StyledLink } from '../Link';
import { useLayoutDataStore } from '../RootLayout/layout-data.store';
import { Stack } from '../Stack';
import { Email } from './Email';

export const NavigationLinks = () => {
  const links = useLayoutDataStore((state) => state.links);

  return (
    <Stack gap="2" data-cy-navigation-links>
      <Email />
      <div style={{ display: 'flex' }}>
        <StyledLink href="/now" css={{ color: '$text2' }}>
          now
        </StyledLink>
      </div>
      {links?.map(({ id, href, displayText }) => (
        <Flex key={id}>
          <StyledLink href={href} css={{ color: '$text2' }}>
            {displayText}
          </StyledLink>
        </Flex>
      ))}
    </Stack>
  );
};

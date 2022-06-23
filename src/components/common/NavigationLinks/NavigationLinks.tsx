import { Flex } from '../Flex';
import { StyledLink } from '../Link';
import { Stack } from '../Stack';
import { Email } from './Email';
import { useNavigationLinks } from './NavigationLinksContext';

export const NavigationLinks = () => {
  const links = useNavigationLinks();

  return (
    <Stack gap="2">
      <Email />
      {links.map(({ id, href, displayText }) => (
        <Flex key={id}>
          <StyledLink href={href} css={{ color: '$text2' }}>
            {displayText}
          </StyledLink>
        </Flex>
      ))}
    </Stack>
  );
};

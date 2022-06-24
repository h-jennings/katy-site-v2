import * as React from 'react';
import { Flex } from '../Flex';
import { StyledLink } from '../Link';
import { Stack } from '../Stack';
import { Email } from './Email';
import { useStore } from './navigation-data.store';

export const NavigationLinks = () => {
  const links = useStore((state) => state.links);

  React.useEffect(() => console.log('rendered'));

  return (
    <Stack gap="2">
      <Email />
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

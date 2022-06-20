import { styled } from '@/styles/stitches.config';
import { HomepageData } from '@/utils/types/cms-data';
import { Grid } from '@components/common/Grid';
import { StyledLink } from '@components/common/Link';
import { UnstyledList } from '@components/common/List';
import { Stack } from '@components/common/Stack';
import { ListItem } from '@components/common/Text';
import { SectionContainer } from './SectionContainer';

interface SectionCertsProps {
  links: HomepageData['certificationsAndMembershipsLinks'] | undefined;
}

export const SectionCerts = ({ links }: SectionCertsProps) => {
  return (
    <SectionContainer label="III. Certifications &amp; Memberships">
      <Grid columns={{ '@initial': '1', '@bp3': '2' }} align="baseline">
        <LinksContainer>
          <Stack as={UnstyledList} gap="4" css={{ maxWidth: '$prose' }}>
            {links != null ? (
              links.map(({ displayText, id, href }) => {
                const [plucked, abbreviation] = getAcronym(displayText);

                return (
                  <ListItem key={id} css={{ display: 'flex' }}>
                    <StyledLink
                      href={href}
                      css={{
                        color: '$text2',
                        fontSize: '$1',
                        lineHeight: '$2',
                      }}
                    >
                      {plucked}
                      {abbreviation ? (
                        <sup style={{ fontSize: 'var(--fontSizes-0)' }}>
                          {abbreviation}
                        </sup>
                      ) : null}
                    </StyledLink>
                  </ListItem>
                );
              })
            ) : (
              <ListItem color="2" size="1" leading="1">
                Nothing to display
              </ListItem>
            )}
          </Stack>
        </LinksContainer>
      </Grid>
    </SectionContainer>
  );
};

const LinksContainer = styled('div', {
  paddingRight: '$6',

  '@bp3': {
    marginLeft: 'calc($6 * 2 * -1)',
    gridColumn: '2 / -1',
  },
});

const getAcronym = (
  text: string | null | undefined,
): [string | null, string | null] => {
  if (text == null) return [null, null];
  const regex = /\((.)+\)/g;
  const plucked = text.replace(regex, '');
  const abbreviation = text.match(regex);

  return [plucked, abbreviation?.[0] ?? null];
};

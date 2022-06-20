import { css, styled } from '@/styles/stitches.config';
import { HomepageData } from '@/utils/types/cms-data';
import { Table, Tbody, Td, Th, Thead } from '@components/common/Table';
import { SectionContainer } from './SectionContainer';
interface SectionExperienceProps {
  experiences: HomepageData['experienceTable'] | undefined;
}

export const SectionExperience = ({ experiences }: SectionExperienceProps) => (
  <SectionContainer label="II. Experience">
    <Table>
      <Thead>
        <tr>
          <Th className={hideCellOnMobile()}>years</Th>
          <Th>company</Th>
          <Th className={hideCellOnMobile()} colSpan={2}>
            role
          </Th>
          <Th colSpan={2}>description</Th>
        </tr>
      </Thead>
      <StyledTBody>
        {experiences ? (
          experiences.map(({ id, year, company, role, description }) => (
            <tr key={id}>
              <Td className={hideCellOnMobile()}>{year}</Td>
              <Td>{company}</Td>
              <Td className={hideCellOnMobile()} colSpan={2}>
                {role}
              </Td>
              <Td colSpan={2}>{description}</Td>
            </tr>
          ))
        ) : (
          <tr>
            <Td colSpan={5}>No data to display.</Td>
          </tr>
        )}
      </StyledTBody>
    </Table>
  </SectionContainer>
);

const StyledTBody = styled(Tbody, {
  [`& ${Td}:last-of-type`]: {
    color: '$text2',
  },
});

const hideCellOnMobile = css({
  display: 'none',
  '@bp3': { display: 'table-cell' },
});

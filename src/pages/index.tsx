import { useGetHomepageDataQuery } from '@/graphql/generated/types.generated';
import { SectionFocusArea } from '@components/home/SectionFocusArea';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  const [{ data }] = useGetHomepageDataQuery();
  const { homepage } = data ?? {};
  const { areasOfFocusTextBlock, areasOfFocusItems } = homepage ?? {};
  return (
    <SectionFocusArea
      textBlock={areasOfFocusTextBlock}
      focusItems={areasOfFocusItems}
    />
  );
};

export default Home;

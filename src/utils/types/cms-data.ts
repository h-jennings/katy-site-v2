import { GetHomepageDataQuery } from '@/graphql/generated/types.generated';

export type HomepageData = NonNullable<GetHomepageDataQuery['homepage']>;

import {
  GetExternalLinksQuery,
  GetHomepageDataQuery,
} from '@/graphql/generated/types.generated';

export type HomepageData = NonNullable<GetHomepageDataQuery['homepage']>;

export type Links =
  | NonNullable<GetExternalLinksQuery['externalLinks']>['links']
  | undefined;

import { gql } from 'urql';

export const GET_HOMEPAGE_DATA = gql`
  query GetHomepageData {
    homepage(where: { id: "cl37evdk7oeen0dkd61v3i6n7" }) {
      seo {
        title
        description
        keywords
        noIndex
        image {
          width
          height
          fileName
        }
      }
      introduction
      areasOfFocusItems {
        id
        title
        blurb
      }
      areasOfFocusTextBlock {
        raw
      }
    }
  }
`;

import { gql } from 'urql';

export const GET_EXTERNAL_LINKS = gql`
  query GetExternalLinks {
    externalLinks: linkCollection(where: { id: "cl37gersf3odp0ck37yjdk63q" }) {
      links(first: 15) {
        id
        href
        displayText
      }
    }
  }
`;

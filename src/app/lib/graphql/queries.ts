import { gql } from "@apollo/client";

export const GET_PODCASTS_QUERY = gql`
  query GetPodcasts($limit: Int!, $keywords: String!, $offset: Int!) {
    contentCards(
      filter: { limit: $limit, keywords: $keywords, types: [PODCAST], offset: $offset }
    ) {
      edges {
        ... on Podcast {
          id
          name
          length
          image {
            ...Image
          }
          categories {
            ...Category
          }
          experts {
            ...Expert
          }
        }
      }
      meta {
        total
        offset
        limit
      }
    }
  }

  fragment Image on Image {
    uri
  }

  fragment Category on Category {
    id
    name
  }

  fragment Expert on Expert {
    firstName
    lastName
    title
    company
  }
`;

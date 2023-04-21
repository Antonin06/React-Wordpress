import {gql} from "@apollo/client";

//https://www.wpgraphql.com/2021/12/23/query-any-page-by-its-path-using-wpgraphql

//HOMEPAGE
export const POSTS = gql`
  query ALL_POSTS {
  posts {
    nodes {
      title
      databaseId
      date
      author {
        node {
          name
        }
      }
      featuredImage {
        node {
          altText
          sourceUrl
          slug
        }
      }
      slug
    }
  }
}
`;

export const ISFRONTPAGE = gql`
query HomePageACF {
  pages {
    nodes {
      reglagesHome {
        test
      }
    }
  }
}
`;

export const GETNODEBYURI = gql`
query GetNodeByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on ContentType {
      name
      uri
      isFrontPage
      contentNodes {
        nodes {
          __typename
          ... on Post {
            id
            title
          }
        }
      }
    }
  }
}
`;
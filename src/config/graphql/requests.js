import {gql} from "@apollo/client";

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
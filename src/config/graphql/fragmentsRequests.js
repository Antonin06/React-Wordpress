import {gql} from "@apollo/client";

// https://www.apollographql.com/docs/react/data/fragments/

export const pageInfo = gql`
    fragment pageInfo on pageInfo {
        pageInfo {
            hasNextPage
            hasPreviousPage
            startCursor
            endCursor
        }
    }
`;
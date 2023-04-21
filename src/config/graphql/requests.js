import {gql} from "@apollo/client";

//https://www.wpgraphql.com/2021/12/23/query-any-page-by-its-path-using-wpgraphql

//HOMEPAGE
export const ALL_POSTS = gql`
    query ALL_POSTS($int: Int) {
        posts(first: $int) {
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

export const GET_MENU_BY_SLUG = gql`
    query GETMENUBYSLUG($slug: ID!) {
        menu(id: $slug, idType: SLUG) {
            count
            id
            databaseId
            name
            slug
            menuItems {
                nodes {
                    id
                    databaseId
                    title
                    url
                    cssClasses
                    description
                    label
                    linkRelationship
                    target
                    parentId
                }
            }
        }
    }
`;

export const MENU_ITEMS = gql`
    query GETMENUITEMS($slug: MenuLocationEnum) {
        menuItems(where: {location: $slug}) {
            nodes {
                key: id
                parentId
                title: label
                url
                uri
                databaseId
            }
        }
    }
`;

export const GETNODEBYURI = gql`
    query GetNodeByUri($uri: String!) {
        nodeByUri(uri: $uri) {
            __typename
            ...ContentType
            ...Page
            ...Category
        }
    }

    fragment ContentType on ContentType {
        name
        uri
        isFrontPage
        contentNodes {
            nodes {
                ...Post
            }
        }
    }

    fragment Page on Page {
        title
        content
        commentCount
        reglagesHome {
            imageHeroSection {
                id
                sourceUrl(size: _2048X2048)
            }
            slider
        }
        comments {
            nodes {
                id
                content
                date
                author {
                    node {
                        id
                        name
                        ... on User {
                            avatar {
                                url
                            }
                        }
                    }
                }
            }
        }
    }

    fragment Post on Post {
        __typename
        id
        date
        uri
        content
        title
        ...Author
    }

    fragment Author on NodeWithAuthor {
        author {
            node {
                name
                avatar {
                    url
                }
            }
        }
    }

    fragment Category on Category {
        name
        description
        posts {
            nodes {
                id
                title
                content
                author {
                    node {
                        name
                        avatar {
                            url
                        }
                    }
                }
                categories {
                    nodes {
                        name
                        uri
                    }
                }
            }
        }
    }
`;
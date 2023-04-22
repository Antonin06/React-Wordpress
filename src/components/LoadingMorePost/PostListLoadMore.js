import React from "react";
// import PostCard from "../components/loop/PostCard";
import {useQuery} from "@apollo/client";
// import {ALL_POSTS} from "../config/graphql/requests";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import PostCard from "../loop/PostCard";


export default function PostsListLoadMore({data, error, loading, fetchMore, slider}) {
    const updateQuery = (previousResult, { fetchMoreResult }) => {
        if( !fetchMoreResult || !fetchMoreResult.posts.nodes.length ) return previousResult;
        fetchMoreResult.posts.nodes = [ ...previousResult.posts.nodes, ...fetchMoreResult.posts.nodes ]
        // console.log(fetchMoreResult)
        return fetchMoreResult;
    };

    const { posts } = data;
    console.log(data)
    return (
        <div>
            <h2>Post List</h2>
            {posts && posts.nodes ? (

                <div>
                    <div className="posts-list grid-1 grid-tablet-2 grid-medium-3">
                        {posts.nodes.map(edge => (
                            <PostCard key={edge.databaseId} post={edge}/>
                        ))}
                    </div>
                    <div>
                        {posts.pageInfo.hasNextPage ? (
                            <button
                                onClick={() => {
                                    fetchMore({
                                        variables: {
                                            first: 6,
                                            after: posts.pageInfo.endCursor || null,
                                            last: null,
                                            before: null
                                        },
                                        updateQuery
                                        // handleUpdateQuery
                                    });
                                }}
                            >
                                Loading More
                            </button>
                        ) : null}
                    </div>
                </div>
            ) : (
                <div>No posts were found...</div>
            )}
        </div>
    );

}
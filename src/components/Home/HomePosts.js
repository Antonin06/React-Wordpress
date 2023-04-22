import React from "react";
import {useQuery} from "@apollo/client";
import PostList from "./PostList";
import {HOME_POSTS} from "./../config/graphql/requests";

export default function HomePosts(props) {
    const slider = Boolean(props?.slider);
    // console.log(props)
    const variables = {
        first: props?.nbPosts ? props.nbPosts : 10,
        last: null,
        after: null,
        before: null
    };
    // console.log(variables)
    const { data, error, loading, fetchMore } = useQuery(HOME_POSTS, {
        variables
    });

    if (error) {
        return <pre>{JSON.stringify(error)}</pre>;
    }

    if (loading) {
        return null;
    }

    return (
        <PostList
            error={error}
            loading={loading}
            data={data}
            fetchMore={fetchMore}
            slider={slider}
            nbPosts={props?.nbPosts ? props?.nbPosts : 10}
        />
    );
};
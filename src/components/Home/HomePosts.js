import React from "react";
import {useQuery, NetworkStatus} from "@apollo/client";
import {HOME_POSTS} from "../../config/graphql/requests";
import HomePostsList from "./HomePostList";

export default function HomePosts(props) {
    const slider = Boolean(props?.slider);
    console.log(props)
    const variables = {
        first: props?.nbPosts ? props.nbPosts : 10,
    };
    // console.log(variables)
    const { data, error, loading, refetch, networkStatus } = useQuery(HOME_POSTS, {
        variables,
        notifyOnNetworkStatusChange: true
    });
    if (networkStatus === NetworkStatus.refetch) return 'Refetching!';

    if (error) {
        return <pre>{JSON.stringify(error)}</pre>;
    }

    if (loading) {
        return null;
    }
    console.log(data)
    return (
        <HomePostsList
            error={error}
            loading={loading}
            data={data}
            slider={slider}
            nbPosts={props?.nbPosts ? props?.nbPosts : 10}
        />
    );
};
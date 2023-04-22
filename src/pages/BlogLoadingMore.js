import React from "react";
import PostsList from "../components/PostList";
import "../assets/scss/home.scss";
import {GETNODEBYURI} from "../config/graphql/requests";
import {useQuery} from "@apollo/client";
import functions from "../utils/functions";
import Posts from "../components/Posts";
import PostsLoadingMore from "../components/LoadingMorePost/PostsLoadingMore";

export default function BlogLoadingMore() {
    const uri = functions.GetPathName();
    console.log(uri)
    const { loading, error, data } = useQuery(GETNODEBYURI, {
        variables: { uri: uri }
    })
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error :(</p>;
    console.log(data)

    return (
        <div id="blog">
            <section className="container">
                <div className="blog">
                    <div className="section-title">
                        <span>Blog Loading More</span>
                    </div>
                    <PostsLoadingMore nbPosts={6}/>
                </div>
            </section>
        </div>
    );
}
import React from "react";
import PostsList from "../components/PostList";
import "../assets/scss/home.scss";
import {GETNODEBYURI} from "../config/graphql/requests";
import {useQuery} from "@apollo/client";
import functions from "../utils/functions";
import Posts from "../components/Posts";
import PostsLoadingMore from "../components/LoadingMorePost/PostsLoadingMore";



export default function Blog() {
    const uri = functions.GetPathName();
    const { loading, error, data } = useQuery(GETNODEBYURI, {
        variables: { uri: uri }
    })
    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error :(</p>;

    // Function to update the query with the new results
    return (
        <div id="blog">
            <section className="container">
                <div className="blog">
                    <div className="section-title">
                        <span>Blog</span>
                    </div>
                    <Posts nbPosts={6}/>
                </div>
            </section>
        </div>
    );
}
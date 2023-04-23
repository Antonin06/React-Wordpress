import React from "react";
import {useQuery} from "@apollo/client";
import {GET_POST_BY_SLUG} from "../config/graphql/requests";
import {Link} from "react-router-dom";
import PostPageContent from "../components/Post/PostContent";
import functions from "../utils/functions";

export default function SingleBlog(props) {
    const id = functions.GetSlug();
    const { loading, error, data } = useQuery(GET_POST_BY_SLUG, {
        variables: {
            id: id
        }
    });

    const postFound = Boolean(data?.post);
    console.log(data)
    return (
        <div className="container">
            <Link to="/">← Home</Link>
            {loading ? (
                <p>Loading…</p>
            ) : error ? (
                <p>Error: {error.message}</p>
            ) : !postFound ? (
                <p>Post could not be found.</p>
            ) : (
                <PostPageContent post={data.post} />
            )}
        </div>
    );
}
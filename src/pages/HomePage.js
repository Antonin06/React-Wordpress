import React from "react";
// import PostsList from "../components/PostsList";
import {POSTS} from "../config/graphql/requests";
import {useQuery} from "@apollo/client";
import PostsList from "../components/PostList";
export default function HomePage() {

    return (
    <div className="page-container">
      <h1>Blog</h1>
      <PostsList />
    </div>
  );
}
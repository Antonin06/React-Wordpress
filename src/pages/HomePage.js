import React from "react";
import PostsList from "../components/PostList";
import "../assets/scss/home.scss";


export default function HomePage() {

    return (
    <div id="home" className="">
        <section className="container">
            <h1>Blog</h1>
            <PostsList />
        </section>
    </div>
  );
}
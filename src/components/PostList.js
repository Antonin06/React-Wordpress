import React from "react";
import PostCard from "../components/loop/PostCard";
import {useQuery} from "@apollo/client";
import {POSTS} from "../config/graphql/requests";
export default function PostsList() {
	const { loading, error, data } = useQuery(POSTS);

	if (loading) return <p>Loading posts...</p>;
	if (error) return <p>Error :(</p>;
	const postsFound = Boolean(data?.posts.nodes.length);
	const posts= data?.posts.nodes;
	if (!postsFound) {
		return <p>No matching posts found.</p>;
	}
	return (
		<div className="posts-list grid">
			{posts.map((post) => (
				<PostCard key={post.databaseId} post={post}/>
			))}
		</div>
	);
}
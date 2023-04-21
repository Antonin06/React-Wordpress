import React from "react";
import PostCard from "../components/loop/PostCard";
import {useQuery} from "@apollo/client";
import {ALL_POSTS} from "../config/graphql/requests";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
export default function PostsList(props) {
	const int = props.nbPosts ? props.nbPosts : 30;
	let slider = Boolean(props.slider);
	const { loading, error, data } = useQuery(ALL_POSTS, {
		variables: { int : int }
	});

	if (loading) return <p>Loading posts...</p>;
	if (error) return <p>Error :(</p>;
	const postsFound = Boolean(data?.posts.nodes.length);
	const posts= data?.posts.nodes;
	if (!postsFound) {
		return <p>No matching posts found.</p>;
	}
	return slider ?
		<Swiper
			modules={[Navigation, Pagination, Scrollbar, A11y]}
			spaceBetween={30}
			slidesPerView={3}
			navigation={{
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			}}
		>
			{posts.map((post) => (
				<SwiperSlide key={post.databaseId}><PostCard post={post}/></SwiperSlide>
			))}
		</Swiper>
		:
		<div className="posts-list grid">
			{posts.map((post) => (
				<PostCard key={post.databaseId} post={post}/>
			))}
		</div>;

}
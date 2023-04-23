import React from "react";
import PostCard from "../../components/loop/PostCard";
import {useQuery} from "@apollo/client";
import {ALL_POSTS} from "../../config/graphql/requests";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


export default function HomePostsList(props) {
	console.log(props.data.posts)
	return (
		<div>
			<h2>Post List</h2>
			{props.data.posts && props.data.posts.nodes ? (
					<Swiper
						modules={[Navigation]}
						spaceBetween={30}
						slidesPerView={3}
						navigation={{
							nextEl: '.home-blog .swiper-btn-wrapper .swiper-button-next',
							prevEl: '.home-blog .swiper-btn-wrapper .swiper-button-prev',
						}}
					>
						{props.data.posts.nodes.map(edge => (
							<SwiperSlide key={edge.databaseId}><PostCard post={edge}/></SwiperSlide>
						))}
					</Swiper>
			) : (
				<div>No posts were found...</div>
			)}
		</div>
	);

	// return slider ?
	// 	<Swiper
	// 		modules={[Navigation, Pagination, Scrollbar, A11y]}
	// 		spaceBetween={30}
	// 		slidesPerView={3}
	// 		navigation={{
	// 			nextEl: '.home-blog .swiper-btn-wrapper .swiper-button-next',
	// 			prevEl: '.home-blog .swiper-btn-wrapper .swiper-button-prev',
	// 		}}
	// 	>
	// 		{posts.map((post) => (
	// 			<SwiperSlide key={post.databaseId}><PostCard post={post}/></SwiperSlide>
	// 		))}
	// 	</Swiper>
	// 	:
	// 	<div className="posts-list grid-1 grid-tablet-2 grid-medium-3">
	// 		{posts.map((post) => (
	// 			<PostCard key={post.databaseId} post={post}/>
	// 		))}
	// 	</div>;

}
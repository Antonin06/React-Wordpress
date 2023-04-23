import React from "react";
import PostCard from "../../components/loop/PostCard";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';


export default function HomePostsList(props) {
	return (
		<div>
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
}
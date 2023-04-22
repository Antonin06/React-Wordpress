import React from "react";
import PostCard from "../components/loop/PostCard";
import {useQuery} from "@apollo/client";
import {ALL_POSTS} from "../config/graphql/requests";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import NavigationPost from "./Navigation";


export default function PostsList({data, error, loading, fetchMore, slider, nbPosts}) {
	// const first = props?.nbPosts ? props.nbPosts : 30;
	// let slider = Boolean(props?.slider);
	// const { loading, error, data } = useQuery(ALL_POSTS, {
	// 	variables: { first : first }
	// });
	// if (loading) return <p>Loading posts...</p>;
	// if (error) return <p>Error :(</p>;
	// const postsFound = Boolean(data?.posts.nodes.length);
	// const posts= data?.posts.nodes;
	// if (!postsFound) {
	// 	return <p>No matching posts found.</p>;
	// }
	// Function to update the query with the new results
	// const updateQuery = (previousResult, { fetchMoreResult }) => {
	// 	return fetchMoreResult.posts.edges.length ? fetchMoreResult : previousResult;
	// };
	let {dd} = nbPosts;
	console.log(dd)
	const { posts } = data;
	console.log(posts)
	console.log(posts.pageInfo.startCursor)
	return (
		<div>
			<h2>Post List</h2>
			{posts && posts.nodes ? (

				<div>
					<div className="posts-list grid-1 grid-tablet-2 grid-medium-3">
						{posts.nodes.map(edge => (
							<PostCard key={edge.databaseId} post={edge}/>
						))}
					</div>
					<div className="pagination">
						{posts.pageInfo.hasPreviousPage ? (
							<NavigationPost fetchMore={fetchMore} first={null} after={null} last={nbPosts} before={posts.pageInfo.startCursor || null} text="Previous"/>
							// <button
							// 	onClick={() => {
							// 		fetchMore({
							// 			variables: {
							// 				first: null,
							// 				after: null,
							// 				last: nbPosts,
							// 				before: posts.pageInfo.startCursor || null
							// 			},
							// 			updateQuery
							// 		});
							// 	}}
							// >
							// 	Previous
							// </button>
						) : null}
						{posts.pageInfo.hasNextPage ? (
								<NavigationPost fetchMore={fetchMore} first={nbPosts} after={posts.pageInfo.endCursor || null} last={null} before={null} text="Next"/>
							// <button
							// 	onClick={() => {
							// 		fetchMore({
							// 			variables: {
							// 				first: nbPosts,
							// 				after: posts.pageInfo.endCursor || null,
							// 				last: null,
							// 				before: null
							// 			},
							// 			updateQuery
							// 		});
							// 	}}
							// >
							// 	Next
							// </button>
						) : null}
					</div>
				</div>
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
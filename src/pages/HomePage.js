import React, {useRef} from "react";
import PostsList from "../components/PostList";
import "../assets/scss/home.scss";
import {GETNODEBYURI, MENU_ITEMS} from "../config/graphql/requests";
import {useQuery} from "@apollo/client";


export default function HomePage() {
    const uri = '/home';
    const { loading, error, data } = useQuery(GETNODEBYURI, {
        variables: { uri: uri }
    })

    if (loading) return <p>Loading posts...</p>;
    if (error) return <p>Error :(</p>;

    const acfHome = data.nodeByUri?.reglagesHome;
    const imgHero = acfHome?.imageHeroSection?.sourceUrl;
    const slider = Boolean(acfHome?.slider);
    // console.log(slider)

    return (
    <div id="home">
        <section className="hero">
            <img src={imgHero} alt=""/>
            <div className="hero__content">
                CouCou
            </div>
        </section>
        <section className="container">
            <div className="home-blog">
                <div className="section-title">
                    <span></span>Nos 5 derniers articles
                    <div className="swiper-button-next" />
                    <div className="swiper-button-prev" />
                </div>
                <PostsList nbPosts={6} slider={slider}/>
            </div>
        </section>
    </div>
  );
}
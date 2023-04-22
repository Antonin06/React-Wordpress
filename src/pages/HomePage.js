import React from "react";
import PostsList from "../components/PostList";
import "../assets/scss/home.scss";
import {GETNODEBYURI} from "../config/graphql/requests";
import {useQuery} from "@apollo/client";
import {Link} from "react-router-dom";
import HomePosts from "../components/Posts";


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
    console.log(slider)

    return (
    <div id="home">
        <section className="hero">
            <img src={imgHero} alt=""/>
            <div className="hero__content">
                Démo Wordpress Headless /w GraphQL
            </div>
        </section>
        <section className="container">
            <div className="home-blog">
                <div className="section-title">
                    <span>Nos derniers articles</span>
                    {slider ?
                        <div className="swiper-btn-wrapper">
                            <div className="swiper-button-next" />
                            <div className="swiper-button-prev" />
                        </div>
                    : null}
                </div>
                <HomePosts nbPosts={6} slider={slider}/>
                <Link to={'/blog'}>Tous les articles</Link>
            </div>
        </section>
    </div>
  );
}
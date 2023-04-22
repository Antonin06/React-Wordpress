import React from "react";
import {Route, Routes} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import './assets/scss/style.scss';
import Blog from "./pages/Blog";
import BlogLoadingMore from "./pages/BlogLoadingMore";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog-loading-more" element={<BlogLoadingMore />} />
            </Routes>
        </div>
    );
}
import React from "react";
import {Route, Routes, BrowserRouter, Router, Navigate} from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./components/Header";
import './assets/scss/style.scss';
import * as PropTypes from "prop-types";

export default function App() {
    const shouldRedirect = true;
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                {/*<Route path="/blog/:slug" component={PostPage} />*/}
            </Routes>
        </div>
    );
}
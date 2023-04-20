import React from "react";
import {Route, Routes, BrowserRouter, Router} from "react-router-dom";
import HomePage from "./pages/HomePage";
export default function App() {
    return (
        <div className="App">
            <Routes>
                <Route exact path="/" element={<HomePage />}/>
                {/*<Route path="/blog/:slug" component={PostPage} />*/}
            </Routes>
        </div>
    );
}
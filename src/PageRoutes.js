import React from 'react';
import {Routes, Route} from "react-router-dom";

/*
    Pages
*/
import Feed from "./pages/Feed";
import Profile from "./pages/Profile";
import Friends from "./pages/Friends";
import Library from "./pages/Library";
import Inventory from "./pages/Inventory";
import Auth from "./pages/Auth";

const PageRoutes = () =>
{
    const RenderPaths = (paths, element) =>
        paths.map((path) => <Route key={path} path={path} element={element} />);

    return (
        <Routes>
            {RenderPaths(["*", "/", "/news", "/feed"], <Feed />)}
            {RenderPaths(["/profile", "/me"], <Profile />)}
            {RenderPaths(["/friends", "/teammates"], <Friends />)}
            {RenderPaths(["/library", "/my-games"], <Library />)}
            {RenderPaths(["/inventory", "/items"], <Inventory />)}
            {RenderPaths(["/auth"], <Auth />)}
        </Routes>
    );
};

export default PageRoutes;
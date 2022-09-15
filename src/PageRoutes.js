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
            {RenderPaths(["/inventory", "/my-items"], <Inventory />)}
        </Routes>
    );
};

export default PageRoutes;
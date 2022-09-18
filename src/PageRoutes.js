import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {AUTH_ROUTES, PUBLIC_ROUTES} from "./utils/Constants";
import {Context} from "./index";
import {observer} from "mobx-react-lite";

const PageRoutes = observer(() =>
{
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuth && AUTH_ROUTES.map(({paths, page}) =>
                paths.map((path) => <Route key={path} path={path} element={page}/>)
            )}

            {PUBLIC_ROUTES.map(({paths, page}) =>
                paths.map((path) => <Route key={path} path={path} element={page}/>)
            )}

            <Route path="*" element={<Navigate to="/"/>} />
        </Routes>
    );
});

export default PageRoutes;
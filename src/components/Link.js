import React from 'react';
import {useNavigate} from "react-router-dom";

const Link = ({to, children}) =>
{
    const navigate = useNavigate();
    const onClick = (e) =>
    {
        e.preventDefault();
        navigate(to);
    }

    return (<a href={to} onClick={onClick}>{children}</a>);
}

export default Link;
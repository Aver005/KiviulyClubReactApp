import React from 'react';
import { useNavigate } from "react-router-dom";

const HeaderLink = ({link, children}) =>
{
    let navigate = useNavigate();

    const onClick = (e) =>
    {
        e.preventDefault();
        navigate(link);
    }

    return (
        <a href={link} onClick={onClick}>{children}</a>
    );
}

export default HeaderLink;
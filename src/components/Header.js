import React, {useContext, useEffect, useState} from 'react';
import logo from "../images/Logo.png"
import Link from "./Link";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormatGetRequest} from "../utils/Functions";
import {API_GET_USER_INFO_URL} from "../utils/Constants";
import axios from "axios";

const Header = observer(() =>
{
    const {user} = useContext(Context);
    const [userInfo, setUserInfo] = useState({});
    const [loading, setLoading] = useState(true);

    const loadUserData = () =>
    {
        const url = FormatGetRequest(API_GET_USER_INFO_URL, {"profile_name": user.profile_name})
        axios.get(url)
            .then(response => {setUserInfo(response.data["user"]); setLoading(false);})
            .catch(error => console.log(error));
    }

    useEffect(loadUserData, [user.profile_name]);

    return (
        <div className="Header">
            <img src={logo} alt="Логотип" />
            {
                user.isAuth ?
                    <ul>
                        <li><Link to="/">Моя лента</Link></li>
                        <li><Link to="/friends">Мои друзья</Link></li>
                        <li><Link to="/library">Мои игры</Link></li>
                        <li><Link to="/items">Мой инвентарь</Link></li>
                    </ul>
                    :
                    <ul>
                        <li><Link to="/news">Новости</Link></li>
                        <li><Link to="/users">Игроки</Link></li>
                        <li><Link to="/auth">Авторизация</Link></li>
                    </ul>
            }
            {
                user.isAuth && loading !== undefined ?
                    <div className="MiniProfile">
                        <Link to="/profile">
                            <img src={userInfo["avatar_url"]} alt="" />
                            <p>Ваш профиль</p>
                        </Link>
                    </div>
                    :
                    <div></div>
            }
        </div>
    );
});

export default Header;
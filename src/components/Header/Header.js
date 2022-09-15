import React from 'react';
import logo from "../../images/Logo.png"
import HeaderLink from "./HeaderLink";

const Header = () =>
{
    const isAuth = false;

    return (
        <div className="Header">
            <img src={logo} alt="" />
            {
                isAuth ?
                <ul>
                    <li><HeaderLink link="/">Моя лента</HeaderLink></li>
                    <li><HeaderLink link="/profile">Мой профиль</HeaderLink></li>
                    <li><HeaderLink link="/friends">Мои тиммейты</HeaderLink></li>
                    <li><HeaderLink link="/library">Мои игры</HeaderLink></li>
                    <li><HeaderLink link="/items">Мой инвентарь</HeaderLink></li>
                </ul>
                :
                <ul>
                    <li><HeaderLink link="/news">Новости</HeaderLink></li>
                    <li><HeaderLink link="/auth">Авторизация</HeaderLink></li>
                </ul>
            }
        </div>
    );
};

export default Header;
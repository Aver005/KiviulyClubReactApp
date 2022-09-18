import React, {useContext, useEffect} from 'react';
import Link from "../components/Link";
import {useNavigate} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Registration = observer(() =>
{
    const {user} = useContext(Context);
    const navigate = useNavigate();
    useEffect(() => {if (user.isAuth) {navigate("/news")}});

    return (
        <div className="Content">
            <div className="CentralBlock">
                <h1>Регистрация</h1>
                <div className="AuthBlock">
                    <input type="text" placeholder="Логин"/>
                    <input type="password" placeholder="Пароль"/>
                    <input type="password" placeholder="Повтор пароля"/>
                    <input type="email" placeholder="Почта"/>
                    <p>Уже есть аккаунт? <Link to="/auth">Авторизация</Link></p>
                    <input type="button" onClick={() => {user.setAuth(true, "");}} value="Создать аккаунт!"/>
                </div>
            </div>
        </div>
    );
})

export default Registration;
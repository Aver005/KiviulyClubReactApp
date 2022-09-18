import React, {useContext, useEffect, useRef} from 'react';
import Link from "../components/Link";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {useNavigate} from "react-router-dom";

const Auth = observer(() =>
{
    const {user} = useContext(Context);
    const navigate = useNavigate();
    const loginInput = useRef(null);
    const passwordInput = useRef(null);

    useEffect(() => {if (user.isAuth) {navigate("/profile")}});

    return (
        <div className="Content">
            <div className="CentralBlock">
                <h1>Авторизация</h1>
                <div className="AuthBlock">
                    <input ref={loginInput} name="user_login" type="text" placeholder="Логин"/>
                    <input ref={passwordInput} name="user_password" type="password" placeholder="Пароль"/>
                    <p>Нет аккаунта? <Link to="/registration">Регистрация</Link></p>
                    <input type="button" onClick={() =>
                        user.auth(loginInput.current.value, passwordInput.current.value)} value="Зайти!"/>
                </div>
            </div>
        </div>
    );
});

export default Auth;
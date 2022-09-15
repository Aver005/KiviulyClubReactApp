import React from 'react';

const Auth = () =>
{
    return (
        <div className="Content">
            <div className="CentralBlock">
                <h1>Авторизация</h1>
                <div className="AuthBlock">
                    <input type="text" placeholder="Логин"/>
                    <input type="password" placeholder="Пароль"/>
                    <p>Нет аккаунта? <a>Регистрация</a></p>
                    <input type="button" value="Зайти!"/>
                </div>
            </div>
        </div>
    );
};

export default Auth;
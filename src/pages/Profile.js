import React from 'react';
import logo from "../images/Logo.png"

const Profile = () =>
{
    return (
        <div className="Content">
            <div className="CentralBlock">
                <h1>Мой профиль</h1>
            </div>
            <div className="CentralBlock">
                <img src={logo} />
            </div>
            <div className="CentralBlock">
                <button>Добавить в друзья</button>
                <button>Список друзей</button>
                <button>Статистика</button>
                <button>Инвентарь</button>
            </div>
        </div>
    );
};

export default Profile;
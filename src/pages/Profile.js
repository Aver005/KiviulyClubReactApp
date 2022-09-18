import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {FormatGetRequest} from "../utils/Functions";
import {API_GET_USER_INFO_URL} from "../utils/Constants";
import axios from "axios";
import {useParams} from "react-router-dom";
import Loading from "../components/Loading";
import Link from "../components/Link";

const Profile = observer(() =>
{
    const {profile_name} = useParams();
    const {user} = useContext(Context);
    const [userInfo, setUserInfo] = useState({});
    const [myProfile, setMyProfile] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() =>
    {
        let user_profile_name = profile_name;
        if (user_profile_name === undefined)
        {
            user_profile_name = user["profile_name"];
            setMyProfile(true);
        }

        const url = FormatGetRequest(API_GET_USER_INFO_URL, {"profile_name": user_profile_name})
        axios.get(url)
            .then(response => {setUserInfo(response.data["user"]); setLoading(false);})
            .catch(error => console.log(error));
    }, [user, profile_name]);

    return (
        <div className="Content">
            <div className="CentralBlock">
                <h1>{userInfo["login"] !== undefined || !myProfile ?
                    "Игрок " + userInfo["login"] : "Мой профиль"}</h1>
            </div>
            <div className="CentralBlock">
                {loading ? <Loading/> : <img src={userInfo["avatar_url"]} alt=""/>}
            </div>
            <div className="CentralBlock">
                <Link to="/users"><button>Добавить в друзья</button></Link>
                <Link to={"/friends/" + (!myProfile ? profile_name : "")}><button>Список друзей</button></Link>
                <Link to={"/stats/" + (!myProfile ? profile_name : "")}><button>Статистика</button></Link>
                <Link to={"/items/" + (!myProfile ? profile_name : "")}><button>Инвентарь</button></Link>
                {(user.isAuth && myProfile) && <button className="RedButton" onClick={user.logout}>Выйти из аккаунта</button>}
            </div>
        </div>
    );
});

export default Profile;
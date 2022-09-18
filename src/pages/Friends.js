import React, {useContext, useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {Context} from "../index";
import Link from "../components/Link";
import Loading from "../components/Loading";
import {FormatGetRequest} from "../utils/Functions";
import {API_GET_FRIENDS_URL, API_GET_USERS_URL} from "../utils/Constants";
import axios from "axios";

const Friends = () =>
{
    const {profile_name} = useParams();
    const {user} = useContext(Context);
    const [friends, setFriends] = useState([]);
    const [loading, setLoading] = useState(true);

    const getFriends = () =>
    {
        let user_profile_name = profile_name
        if (user_profile_name === undefined) {user_profile_name = user.profile_name;}
        setLoading(true);
        const url = FormatGetRequest(API_GET_FRIENDS_URL, {"profile_name": user_profile_name})
        axios.get(url)
            .then(response => {setFriends(response.data["friends"]); setLoading(friends === undefined);})
            .catch(error => console.log(error));
    }

    const renderUserBlock = (user) =>
    {
        return (
            <div key={user["login"]} className="SmallUserBlock">
                <Link to={"/user/" + user["profile_name"]}>
                    <img src={user["avatar_url"]} alt={user["login"]} />
                    <p>{user["login"]}</p>
                </Link>
            </div>
        )
    }

    useEffect(getFriends, [profile_name, user.profile_name]);

    return (
        <div className="Content">
            <div className="CentralBlock">
                <div className="FindUsersBlock">
                    <h2>Друзья</h2>
                    {
                        loading || friends === undefined ?
                            <Loading /> :
                            (friends.length === 0 ?
                                <p>У вас нет друзей... :(</p>
                                :
                                friends.map((user) => renderUserBlock(user)))
                    }
                    <div className="LineButtons">
                        <Link to="/users"><button>Найти других игроков</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Friends;
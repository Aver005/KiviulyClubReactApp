import '../style/Players.css';
import React, {useEffect, useState} from 'react';
import Link from "../components/Link";
import {FormatGetRequest} from "../utils/Functions";
import {API_GET_USERS_URL} from "../utils/Constants";
import axios from "axios";
import Loading from "../components/Loading";

const Players = () =>
{
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchOptions, setSearchOptions] = useState({"limit": 6});

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

    const getUsers = () =>
    {
        setLoading(true);
        const url = FormatGetRequest(API_GET_USERS_URL, searchOptions)
        axios.get(url)
            .then(response => {setUsers(response.data["users"]); setLoading(users === undefined);})
            .catch(error => console.log(error));
    }

    const onUserSearchInput = (event) =>
    {
        const rawInput = event.target.value;
        (rawInput.length === 0 && searchOptions.hasOwnProperty("startsWith"))
        ? delete searchOptions["startsWith"]
        : searchOptions["startsWith"] = rawInput
        setSearchOptions(searchOptions);
        getUsers();
    }

    const onClickLoadMore = (event) =>
    {
        let limit = searchOptions["limit"];
        searchOptions["limit"] += limit;
        setSearchOptions(searchOptions);
        getUsers();
    }

    useEffect(getUsers, [searchOptions]);

    return (
        <div className="Content">
            <div className="FindUsersBlock">
                <h2>Найти игрока</h2>
                <input type="text" onInput={onUserSearchInput} placeholder="Ник игрока / имя профиля" />
                <input type="button" value="Найти" />
            </div>
            <div className="FindUsersBlock">
                <h2>Игроки</h2>
                {loading ? <Loading/> : users.map((user) => renderUserBlock(user))}
                {
                    users.length === searchOptions.limit &&
                    <div className="LineButtons">
                        <button onClick={onClickLoadMore}>Загрузить ещё...</button>
                    </div>
                }
            </div>
        </div>
    );
};

export default Players;
import {makeAutoObservable} from "mobx";
import Cookies from 'js-cookie'
import MD5 from "crypto-js/md5";
import axios from "axios";
import {API_AUTH_URL} from "../utils/Constants";
import {FormatGetRequest} from "../utils/Functions";

class User
{
    token = ""
    profile_name = ""
    login = ""
    avatar_url = ""

    constructor()
    {
        this.isAuth = Cookies.get('isAuth') !== undefined;
        if (this.isAuth)
        {
            this.token = Cookies.get('authToken');
            this.login = Cookies.get("login");
            this.profile_name = Cookies.get("profileName");
            this.avatar_url = Cookies.get("avatarUrl");
        }
        makeAutoObservable(this);
    }

    setAuth = (bool, token = "") =>
    {
        this.isAuth = bool;
        this.token = token;

        if (!bool)
        {
            Cookies.remove('isAuth');
            Cookies.remove('authToken');
            return;
        }

        Cookies.set('isAuth', bool, {expires: 14});
        Cookies.set('authToken', token, {expires: 14});
    }

    auth = (login, password) =>
    {
        password = MD5(password);

        const url = FormatGetRequest(API_AUTH_URL, {
            "login": login,
            "password": password
        })

        axios.get(url)
            .then(response =>
            {
                if (response.data["token"] === undefined) {return;}
                this.setAuth(true, response.data["token"]);
                this.login = response.data["login"];
                this.profile_name = response.data["profile_name"];
                this.avatar_url = response.data["avatar_url"];

                Cookies.set('login', this.login, {expires: 14});
                Cookies.set('profileName', this.profile_name, {expires: 14});
                Cookies.set('avatarUrl', this.avatar_url, {expires: 14});
            })
            .catch(error => console.log(error));
    }

    logout = () => {this.setAuth(false);}
}

export default User
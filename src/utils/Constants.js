import Players from "../pages/Players";
import Auth from "../pages/Auth";
import Registration from "../pages/Registration";
import Profile from "../pages/Profile";
import Inventory from "../pages/Inventory";
import Friends from "../pages/Friends";
import Library from "../pages/Library";
import Feed from "../pages/Feed";
import Stats from "../pages/Stats";

export const API_URL = "http://192.168.1.5:4000/api/v1.0/";
export const API_AUTH_URL = API_URL + "auth";
export const API_REGISTRATION_URL = API_URL + "registration";
export const API_GET_USERS_URL = API_URL + "get/users";
export const API_GET_USER_INFO_URL = API_URL + "get/user_info";
export const API_GET_FRIENDS_URL = API_URL + "get/friends";


export const PUBLIC_ROUTES =
[
    {
        paths: ["/", "/news", "/feed"],
        page: <Feed/>
    },
    {
        paths: ["/players", "/users"],
        page: <Players/>
    },
    {
        paths: ["/auth", "/login"],
        page: <Auth/>
    },
    {
        paths: ["/registration", "/register"],
        page: <Registration/>
    },
    {
        paths: [
            "/profile/:profile_name",
            "/user/:profile_name",
            "/player/:profile_name"
        ],
        page: <Profile/>
    },
    {
        paths: ["/friends/:profile_name", "/teammates/:profile_name"],
        page: <Friends/>
    },
    {
        paths: [
            "/stats/:profile_name",
            "/stat/:profile_name",
            "/statistics/:profile_name",
            "/statistic/:profile_name"
        ],
        page: <Stats/>
    }
]

export const AUTH_ROUTES =
[
    {
        paths: ["/inventory", "/items"],
        page: <Inventory/>
    },
    {
        paths: ["/friends", "/teammates"],
        page: <Friends/>
    },
    {
        paths: ["/library", "/my-games"],
        page: <Library/>
    },
    {
        paths: ["/profile", "/me"],
        page: <Profile/>
    },
    {
        paths: [
            "/stats",
            "/statistics"
        ],
        page: <Stats/>
    }
]

import axios from "axios";
import { makeAutoObservable } from "mobx";
import { serverURL } from "../Config/globalconfig";
import AuthService from "../Services/AuthService";

export default class Store {
    user;
    isAuth = false;

    constructor() {
        makeAutoObservable(this)
    }

    setAuth(bool) {
        this.isAuth = bool
    }

    setUser(user) {
        this.user = user
    }

    async login(email, password) {
        try {
            const response = await AuthService.login(email, password)
            localStorage.setItem(`token`, response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e);
        }
    }

    async registration(email, password) {
        try {
            const response = await AuthService.registration(email, password)
            localStorage.setItem(`token`, response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e);
        }
    }

    async logout() {
        try {
            const response = await AuthService.logout()
            localStorage.removeItem(`token`)
            this.setAuth(false)
            this.setUser({})
        } catch (e) {
            console.log(e);
        }
    }

    async checkAuth() {
        try {
            const response = await axios.get(`${serverURL}/refresh`, { withCredentials: true })

            localStorage.setItem(`token`, response.data.accessToken)
            this.setAuth(true)
            this.setUser(response.data.user)
        } catch (e) {
            console.log(e)
        }
    }
}
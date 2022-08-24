import $api from "../Http";

export default class AuthService {
    static async login(username, password) {
        return $api.post(`/login`, { email, password })
    }

    static async registration(username, password) {
        return $api.post(`/sign-up`, { email, password })
    }

    static async logout() {
        return $api.post(`/logout`)
    }

}
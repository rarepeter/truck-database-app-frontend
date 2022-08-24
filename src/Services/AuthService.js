import $api from "../Http";

export default class AuthService {
    static async login(email, password) {
        return $api.post(`/login`, { email, password })
    }

    static async registration(email, password) {
        return $api.post(`/sign-up`, { email, password })
    }

    static async logout() {
        return $api.post(`/logout`)
    }

}
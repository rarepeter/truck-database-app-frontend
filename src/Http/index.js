import axios from 'axios'
import { serverURL } from '../Config/globalconfig'

const $api = axios.create({
    withCredentials: true,
    baseURL: serverURL
})

$api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem(`token`)}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response.status == 401 && error.config && !error.config._isRetried) {
        originalRequest._isRetried = true
        try {
            const response = await axios.get(`${serverURL}/refresh`, { withCredentials: true })
            localStorage.setItem(`token`, response.data.accessToken)
            return $api.request(originalRequest)

        } catch (e) {
            console.log("User not authorized")
        }
    }
    throw error
})

export default $api
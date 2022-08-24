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

export default $api
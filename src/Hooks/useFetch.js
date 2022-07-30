import axios from 'axios'

export const useFetch = async (path) => {
    const { data } = await axios.get(`${path}`)
    return data
}
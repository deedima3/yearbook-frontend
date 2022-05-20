import axios from "axios";

export const client = axios.create({
    baseURL: 'https://api.imgbb.com/1/upload',
})

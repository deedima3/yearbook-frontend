import { client } from "../baseApi/base"

export default {
    async login(username : string, password : string){
        return (await client.post('/login', {
            username,
            password
        })).data.data
    },

    async register(username : string, password : string){
        return (await client.post('/register', {
            username,
            password
        })).data.data
    }
}
import { AuthData } from "../../interfaces/userAuth.interfaces"
import { client } from "../baseApi/base"

export default {
    async login(authData: AuthData) {
        return (await client.post('/login',
           authData
        )).data.data
    },

    async register(authData: AuthData){
        return (await client.post('/register', 
            authData
        )).data.data
    }
}
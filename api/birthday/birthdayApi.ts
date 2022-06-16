import { client } from "../baseApi/base"

export default {
    async getAllBirthday(){
        return (await client.get(`/birthday`)).data.data;
    },
    async checkIfBirthday(id: string){
        return (await client.get(`/birthday/${id}`)).data.data;
    }
}
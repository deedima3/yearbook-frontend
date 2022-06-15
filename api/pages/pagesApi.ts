import { Page } from "../../interfaces/pages.interfaces";
import { client } from "../baseApi/base"

export default {
    async getAllPages() {
        return (await client.get('/pages')).data.data;
    },

    async getPagesByID(id : number) {
        return (await client.get(`/user/pages/${id}`)).data.data;
    },

    async addNewPage(page : any) {
        return (await client.post('/pages', page)).data.data;
    },

    async searchPage(nickname : string, nim : string) {
        return (await client.get(`/pages/search?nickname=${nickname}&nim=${nim}`)).data.data;
    }
    
}
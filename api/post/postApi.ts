import { client } from "../baseApi/base";

export default {
    async getAllPost() {
        return (await client.get('/posts')).data.data;
    },
    
    async getPostByID(id: number) {
        return (await client.get(`/posts/${id}`)).data.data;
    }
}
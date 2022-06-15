import { VoteData } from "../../interfaces/voted.interfaces";
import { client } from "../baseApi/base";

export default {
    async getAllPost() {
        return (await client.get('/posts')).data.data;
    },
    
    async getPostByID(id: number) {
        return (await client.get(`/twits/pages/${id}`)).data.data;
    },

    async addNewPost(post: any, setProgress : any) {
        return await client.post('/twits', post, {
            onUploadProgress: (progressEvent) => {
              const { loaded, total } = progressEvent;
              setProgress(Math.round((loaded * 100) / total));
            },
          })
    },

    async updateVote(data: VoteData) {
        return (await client.patch(`/vote`, data)).data.data;
    },
}
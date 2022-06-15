import { AuthData } from "../../interfaces/userAuth.interfaces";
import { client } from "../baseApi/base";

export default {
  async login(authData: AuthData, setProgress: any) {
    return (
      await client.post("/login", authData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          setProgress(Math.round((loaded * 100) / total));
        },
      })
    ).data.data;
  },

  async register(authData: AuthData, setProgress: any) {
    return (
      await client.post("/register", authData, {
        onUploadProgress: (progressEvent) => {
          const { loaded, total } = progressEvent;
          setProgress(Math.round((loaded * 100) / total));
        },
      })
    ).data.data;
  },

  async refresh(id: string) {
    return (
      await client.post(
        `/refresh/`,
        {},
        {
          headers: {
            Token: id,
          },
        }
      )
    ).data.data.accesstoken;
  },
};

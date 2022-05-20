import { string } from "yup";
import create, { StateCreator } from "zustand";
import { devtools, PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface UserState {
  user: string | null | undefined;
  is_admin: number | null | undefined;
  changeUser: (user: string, is_admin : number) => void;
  removeUser: () => void;
}

type MyPersist = (
  config: StateCreator<UserState>,
  options: PersistOptions<UserState>
) => StateCreator<UserState>;

const useUserStore = create<UserState>(
  (persist as unknown as MyPersist)(
    (set: any) => ({
      user: "",
      is_admin : 0,
      changeUser: (user: string, is_admin : number) => set({ user: user, is_admin: is_admin }),
      removeUser: () => set({ user: "", is_admin: 0 }),
    }),
    {
      name: "user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;

import { string } from "yup";
import create, { StateCreator } from "zustand";
import { devtools, PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";

interface UserState {
  user: string | null | undefined;
  changeUser: (user: string) => void;
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
      changeUser: (user: string) => set({ user: user }),
      removeUser: () => set({ user: ""}),
    }),
    {
      name: "yearbook-user-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useUserStore;

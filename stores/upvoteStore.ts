import { string } from "yup";
import create, { StateCreator } from "zustand";
import { devtools, PersistOptions } from "zustand/middleware";
import { persist } from "zustand/middleware";
import { VoteData } from "../interfaces/voted.interfaces";

interface VotedState {
  voted: VoteData[];
  addVoted: (newVoted: VoteData, voted: VoteData[]) => void;
  removeVoted: () => void;
}

type MyPersist = (
  config: StateCreator<VotedState>,
  options: PersistOptions<VotedState>
) => StateCreator<VotedState>;

const useVotedStore = create<VotedState>(
  (persist as unknown as MyPersist)(
    (set: any) => ({
      voted: [],
      addVoted: (newVoted: VoteData, voted: VoteData[]) =>
        set({ voted: [...voted, newVoted] }),
      removeVoted: () => set({ voted: [] }),
    }),
    {
      name: "yearbook-voted-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useVotedStore;

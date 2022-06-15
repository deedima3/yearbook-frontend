import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import postApi from "../../api/post/postApi";
import { VoteData } from "../../interfaces/voted.interfaces";
import useVotedStore from "../../stores/upvoteStore";

export function useVoted() {
  const votedZustand = useVotedStore((state) => state.voted);
  const addNewVoted = useVotedStore((state) => state.addVoted);
  const removeVotedZustand = useVotedStore((state) => state.removeVoted);
  const router = useRouter();

  const refreshData = () => {
    router.replace(router.asPath);
  }

  const [voted, setVoted] = useState<VoteData[]>([]);

  const addVoted = (newVoted: VoteData) => {
    addNewVoted(newVoted, votedZustand);
    setVoted([...voted, newVoted]);
  };

  const removeVoted = () => {
    removeVotedZustand();
    setVoted([]);
  };

  const isVoted = (id: number) => {
    if (
      voted.some((e) => e.postID == id) &&
      voted.some((e) => e.action == "up")
    ) {
      return "up";
    } else if (
      voted.some((e) => e.postID == id) &&
      voted.some((e) => e.action == "up")
    ) {
      return "down";
    }
    return "";
  };

  const handleUpvote = (id: number) => {
    let data: VoteData = {
      postID: id,
      action: "up",
    };
    postApi.updateVote(data);
    addVoted(data);
    refreshData();
  };

  const handleDownvote = (id: number) => {
    let data: VoteData = {
      postID: id,
      action: "down",
    };
    postApi.updateVote(data);
    addVoted(data);
    refreshData();
  };

  useEffect(() => {
    if (votedZustand) {
      setVoted(votedZustand);
    }
  }, [votedZustand]);

  return {
    voted,
    votedZustand,
    addVoted,
    removeVoted,
    isVoted,
    handleUpvote,
    handleDownvote,
  };
}

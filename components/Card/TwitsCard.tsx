import React, { useMemo, useState } from "react";

interface Props {
  title: string;
  postedOn: string;
  description: string;
  upvoted: boolean;
  downvoted: boolean;
  upvoteCount: number;
  downvoteCount: number;
}

const TwitsCard = ({
  title,
  postedOn,
  description,
  upvoted,
  upvoteCount,
  downvoted,
  downvoteCount,
}: Props) => {
  const [upHovered, setupHovered] = useState(false);
  const [downHovered, setdownHovered] = useState(false);

  const truncatedDescription = useMemo(() => {
    return description.substring(0, 300);
  }, [description]);

  return (
    <div className="flex border-2 border-black bg-white py-10 px-10 max-w-screen-lg justify-between gap-4">
      <div className="flex flex-col max-w-screen-md">
        <div className="text-3xl font-bold">{title}</div>
        <div className="text-md font-semibold text-gray-500">{`Posted On : ${postedOn}`}</div>
        <div className="text-md mt-3">{truncatedDescription}</div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="flex gap-4 items-center">
          <div
            className="w-16 h-16 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex items-center"
            onMouseLeave={() => setupHovered(false)}
            onMouseEnter={() => setupHovered(true)}
          >
            {upvoted || upHovered ? (
              <img src="/filledUp.png" alt="FilledUpvote" />
            ) : (
              <img src="/unfilledUp.png" alt="UnFilledUpvote" />
            )}
          </div>
          <p className="text-2xl font-bold text-brand-green">{upvoteCount}</p>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className="w-16 h-16 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-200 flex items-center"
            onMouseLeave={() => setdownHovered(false)}
            onMouseEnter={() => setdownHovered(true)}
          >
            {downvoted || downHovered ? (
              <img src="/filledDown.png" alt="FilledDownvote" />
            ) : (
              <img src="/unfilledDown.png" alt="UnFilledDownvote" />
            )}
          </div>
          <p className="text-2xl font-bold text-brand-red">{downvoteCount}</p>
        </div>
      </div>
    </div>
  );
};

export default TwitsCard;

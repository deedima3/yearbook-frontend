import Link from "next/link";
import React from "react";

export interface ProfileCardProps {
  imageLink: string;
  name: string;
  description: string;
  userID: string;
}

const ProfileCard = ({ imageLink, name, description, userID }: ProfileCardProps) => {

  const descriptionCropped = description.length > 100 ? description.substring(0, 100) + "..." : description;

  return (
    <Link href={`/people/${userID}`}>
      <div className="cursor-pointer border-black border-2 flex flex-col w-max h-max hover:shadow-button-shadow transition-all duration-200 hover:-translate-x-2 hover:-translate-y-2">
      <div className="w-[250px] h-[300px]">
        <img src={imageLink} alt={name} className="object-fill w-full h-full bg-white"/>
      </div>
      <div className="flex flex-col bg-white py-5 px-5 w-[250px]">
        <h3 className="text-md">{name}</h3>
        <p className="text-xs">{descriptionCropped}</p>
      </div>
    </div>
    </Link>
  );
};

export default ProfileCard;

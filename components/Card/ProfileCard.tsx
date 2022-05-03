import React from "react";

interface Props {
  imageLink: string;
  name: string;
  description: string;
}

const ProfileCard = ({ imageLink, name, description }: Props) => {
  return (
    <div className="border-black border-2 flex flex-col w-max hover:shadow-button-shadow transition-all duration-200 hover:-translate-x-2 hover:-translate-y-2">
      <div className="w-[250px] h-[300px]">
        <img src={imageLink} alt={name} className="object-none w-full h-full"/>
      </div>
      <div className="flex flex-col bg-white w-full py-5 px-5">
        <h3 className="text-md">{name}</h3>
        <p className="text-xs">{description}</p>
      </div>
    </div>
  );
};

export default ProfileCard;

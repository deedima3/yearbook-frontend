import React from "react";

interface Props {
  imageLink: string;
  name: string;
  description: string;
}

const HeaderCard = ({ imageLink, name, description }: Props) => {
  return (
    <div className="border-black border-2 flex max-w-screen-lg shadow">
      <div className="w-[300px] h-[300px]">
        <img src={imageLink} alt={name} className="object-none w-full h-full"/>
      </div>
      <div className="flex flex-col bg-white w-full py-8 px-5 gap-4">
        <h3 className="text-3xl font-extrabold">{name}</h3>
        <p className="text-md whitespace-pre-line break-words">{description}</p>
      </div>
    </div>
  );
};

export default HeaderCard;
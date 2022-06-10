import React from "react";
import CustomLinkButton from "../Button/CustomLinkButton";

export interface Props {
  imageLink: string;
  name: string;
  handleCancel? : () => void;
}

const ModalsCard = ({name, imageLink, handleCancel}: Props) => {
  return (
      <div className="bg-white border-4 border-black max-w-4xl">
        <div className="flex justify-center">
        <img src={imageLink} alt={name} className="absolute rounded-full h-32 w-32 -mt-20 object-cover"/>
        </div>
        <div className="flex justify-end mt-6 items-center">
           <button onClick={handleCancel} className=" w-12">
           <img src="/x-cancel.png" alt="cancel"/>
           </button>
        </div>
    <div className="mx-48 my-8 text-center">
      <h2 className="text-3xl font-bold">
        Today is {name} Birthday
      </h2>
      <h2 className="text-xl mt-3">
        Don't miss a chance to wish her happy birthday
      </h2>
      </div>
      <div className="flex justify-center mb-12">
      <CustomLinkButton href={"/view"}>SAY SOMETHING</CustomLinkButton>
      </div>
      </div>
  );
};

export default ModalsCard;
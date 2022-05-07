import React from "react";
import CustomLinkButton from "../Button/CustomLinkButton";

export interface Props {
  name: string;
  handleCancel? : () => void;
}

const ModalsCard = ({name, handleCancel}: Props) => {
  return (
      <div className="bg-white border-4 border-black max-w-4xl">
        <div className="flex justify-end mt-6 items-center">
           <button onClick={handleCancel} className=" w-12">
           <img src="/x-cancel.png" alt="cancel"/>
           </button>
        </div>
        <img src="/wish.png" alt="bday" className="w-32"/>
      <h2 className="text-3xl mx-28 my-10 w-4/5 text-center">
        {name} is having a birthday, want to say something?
      </h2>
      <div className="flex justify-center mb-12">
      <CustomLinkButton href={"/view"}>SAY SOMETHING</CustomLinkButton>
      </div>
      </div>
    // <div className="flex justify-center">
    // <div className="bg-white rounded-md w-5/6 items-center gap-2 pt-2 font-inter">
    //   <h3 className="text-xl font-semibold text-brand-black-secondary md:border-b border-grey-800 py-2 pl-6">
    //       Confirm Delete</h3>
    //     <div className="flex gap-2 justify-end mx-8 mt-3 items-center">
    //        <button onClick={handleCancel} className="bg-brand-primary py-1 px-5 mb-6 rounded-lg md: hover:bg-brand-secondary">
    //         <img src="" alt="cancel"/>
    //        </button>
    //     </div>
    // </div>
    // </div>
  );
};

export default ModalsCard;
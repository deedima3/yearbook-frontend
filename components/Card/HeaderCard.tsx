import { EditorState } from "draft-js";
import React from "react";
import ArticleFields from "../TextEditor/ArticleFields";

interface Props {
  imageLink: string;
  name: string;
  description: EditorState;
}

const HeaderCard = ({ imageLink, name, description } : Props) => {
  return (
    <div className="border-black border-2 flex max-w-screen-lg shadow">
      <div className="w-[250px] h-[300px]">
        <img src={imageLink} alt={name} className="object-none w-full h-full"/>
      </div>
      <div className="flex flex-col bg-white w-full py-8 px-5 gap-4">
        <h3 className="text-3xl font-extrabold">{name}</h3>
        <ArticleFields
              article={description}
              plugin={[]}
              readOnly
            />
      </div>
    </div>
  );
};

export default HeaderCard;
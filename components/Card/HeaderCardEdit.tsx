import { EditorState } from "draft-js";
import React, { Dispatch, SetStateAction } from "react";
import pagesApi from "../../api/pages/pagesApi";
import { useUser } from "../../hooks/data/useUser";
import CustomButton from "../Button/CustomButton";
import ArticleFields from "../TextEditor/ArticleFields";
import ArticleToolbar from "../TextEditor/ArticleToolbar";

interface Props {
  imageLink: string;
  name: string;
  handleRichText: any;
  handleBlockType: any;
  handleSave: any;
  article: EditorState;
  setArticle: Dispatch<SetStateAction<EditorState>>;
  dataPusher: (data: any) => void;
  handleOpenModal: () => void;
  handlePushData: () => void;
}

const HeaderCardEdit = ({
  imageLink,
  name,
  handleBlockType,
  handleRichText,
  handleSave,
  article,
  setArticle,
  handleOpenModal,
  handlePushData,
}: Props) => {
  const { user, userData, changeUser, removeUser } = useUser();

  return (
    <>
      <div className="w-full flex justify-center gap-20">
        <ArticleToolbar
          richTextHandler={handleRichText}
          blockTypeHandler={handleBlockType}
          saveHandler={handleSave}
        />
        <div className="border-black border-2 flex max-w-screen-lg shadow">
          <div className="w-[250px] h-[300px] relative overflow-clip">
            <div className="w-[250px] h-[300px]">
              <img
                src={imageLink}
                alt={name}
                className="object-fill w-full h-full bg-white"
              />
            </div>
            <div className="absolute inset-0 p-5 w-full h-full flex items-center justify-center">
              <CustomButton
                onClick={() => {
                  handleOpenModal();
                }}
              >
                CHANGE PHOTO
              </CustomButton>
            </div>
          </div>
          <div className="flex flex-col bg-white w-full py-8 px-5 gap-4">
            <h3 className="text-3xl font-extrabold">{name}</h3>
            <ArticleFields
              article={article}
              setArticle={setArticle}
              plugin={[]}
            />
          </div>
        </div>
      </div>
      <CustomButton extraClasses="mt-10" onClick={() => {}}>
        SAVE PROFILE
      </CustomButton>
    </>
  );
};

export default HeaderCardEdit;

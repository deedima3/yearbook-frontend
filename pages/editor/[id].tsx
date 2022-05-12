import { EditorState, RichUtils } from "draft-js";
import React, { useState } from "react";
import CustomButton from "../../components/Button/CustomButton";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Title from "../../components/SEO/Title";
import ArticleFields from "../../components/TextEditor/ArticleFields";
import ArticleToolbar from "../../components/TextEditor/ArticleToolbar";

const CreateTwits = () => {
  const [article, setArticle] = useState<EditorState>(
    EditorState.createEmpty()
  );
  const [title, setTitle] = useState("");

  const handleRichText =
    (inlineStyle: string) =>
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      e.preventDefault();
      setArticle(RichUtils.toggleInlineStyle(article, inlineStyle));
    };

  const handleBlockType =
    (bType: string) =>
    (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
      e.preventDefault();
      setArticle(RichUtils.toggleBlockType(article, bType));
    };

  const handleSave = () => {
    console.log(article.getCurrentContent().getPlainText());
  };

  return (
    <NormalPageLayout>
        <Title pageTitle="New Twits" description="Create new twits"/>
      <div className="w-full flex justify-center gap-20">
        <ArticleToolbar
          richTextHandler={handleRichText}
          blockTypeHandler={handleBlockType}
          saveHandler={handleSave}
        />
        <ArticleFields
          article={article}
          setArticle={setArticle}
          plugin={[]}
        />
      </div>
      <CustomButton extraClasses="mt-10" onClick={handleSave}>
          SAVE TWITS
      </CustomButton>
    </NormalPageLayout>
  );
};

export default CreateTwits;

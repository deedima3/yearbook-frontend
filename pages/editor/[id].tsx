import CustomButton from "../../components/Button/CustomButton";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Title from "../../components/SEO/Title";
import ArticleFields from "../../components/TextEditor/ArticleFields";
import ArticleToolbar from "../../components/TextEditor/ArticleToolbar";
import { useArticle } from "../../hooks/abstraction/useArticle";

const CreateTwits = () => {
  const {
    article,
    setArticle,
    handler: { handleBlockType, handleRichText, handleSave },
    title,
    setTitle,
  } = useArticle();

  return (
    <NormalPageLayout>
      <Title pageTitle="New Twits" description="Create new twits" />
      <div className="w-full flex justify-center gap-20">
        <ArticleToolbar
          richTextHandler={handleRichText}
          blockTypeHandler={handleBlockType}
          saveHandler={handleSave}
        />
        <ArticleFields article={article} setArticle={setArticle} plugin={[]} />
      </div>
      <CustomButton extraClasses="mt-10" onClick={handleSave}>
        SAVE TWITS
      </CustomButton>
    </NormalPageLayout>
  );
};

export default CreateTwits;

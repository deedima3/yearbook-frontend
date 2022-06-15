import { useRouter } from "next/router";
import postApi from "../../api/post/postApi";
import CustomButton from "../../components/Button/CustomButton";
import NormalPageLayout from "../../components/Layout/NormalPageLayout";
import Loader from "../../components/Loader/Loader";
import Title from "../../components/SEO/Title";
import ArticleToolbar from "../../components/TextEditor/ArticleToolbar";
import Toast from "../../components/Toast/Toast";
import { useArticle } from "../../hooks/abstraction/useArticle";
import { useProgressLoader } from "../../hooks/show/useProgressLoader";
import { useToast } from "../../hooks/show/useToast";
import { ToastProps } from "../../interfaces/toastInterfaces";
import dynamic from "next/dynamic";
const ArticleFields = dynamic(
  () => import("../../components/TextEditor/ArticleFields"),
  { ssr: false }
);

const CreateTwits = () => {
  const {
    article,
    setArticle,
    handler: { handleBlockType, handleRichText, handleSave },
    title,
    setTitle,
  } = useArticle();

  const router = useRouter();
  const [progress, isLoading, setLoading, setProgress] = useProgressLoader();
  const [toast, showToast] = useToast(5000);
  const toastContentSuccess: ToastProps = {
    title: "Posting Berhasil",
    message: "Terimakasih sudah bercerita",
    variant: "success",
  };

  const toastContentFailed: ToastProps = {
    title: "Posting Gagal",
    message: "Terjadi kesalahan dalam sistem",
    variant: "error",
  };

  const pushData = async () => {
    let dataPush = {
      content: handleSave(),
      pages: parseInt(router.query.id!.toString()),
      upvote: 0,
      downvote: 0,
      title: title,
    };
    console.log(dataPush);
    try {
      let data = await postApi.addNewPost(dataPush, setProgress);
      showToast(2000, toastContentSuccess);
    } catch (e) {
      console.log(e);
      showToast(2000, toastContentFailed);
    }
  };

  return (
    <NormalPageLayout>
      <Title pageTitle="New Twits" description="Create new twits" />
      <div className="w-full flex justify-center gap-20">
        <ArticleToolbar
          richTextHandler={handleRichText}
          blockTypeHandler={handleBlockType}
          saveHandler={handleSave}
        />
        <div className="flex border-2 border-black bg-white py-10 px-10 max-w-screen-lg justify-between gap-4 w-full">
          <div className="flex flex-col max-w-screen-md w-full">
            <input type={"text"} value={title} onChange={(e) => {setTitle(e.target.value)}} className="text-3xl font-bold mt-2 focus:border-transparent" placeholder="Isi judul anda"/>
            <ArticleFields
              article={article}
              setArticle={setArticle}
              plugin={[]}
            />
          </div>
        </div>
      </div>
      <CustomButton extraClasses="mt-10" onClick={pushData}>
        SAVE TWITS
      </CustomButton>
      <Toast
        show={toast.show}
        title={toast.title}
        message={toast.message}
        variant={toast.variant}
      />
      <Loader isLoading={isLoading} progress={progress} />
    </NormalPageLayout>
  );
};

export default CreateTwits;

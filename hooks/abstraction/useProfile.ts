import { EditorState } from "draft-js";
import { useState } from "react";
import { useArticle } from "./useArticle";
import { useImageCropper } from "./useImageCropper";

export function useProfile(descriptionState?: EditorState, imageLinkState? : string) {
  const {
    article,
    setArticle,
    handler: { handleBlockType, handleRichText, handleSave },
    title,
    setTitle,
  } = useArticle(descriptionState);

  const {
    onImageLoad,
    onSelectFile,
    crop,
    setCrop,
    completedCrop,
    imgSrc,
    imgRef,
    uploadImage,
    setCompletedCrop,
  } = useImageCropper(5 / 6);

  const [imageLink, setImageLink] = useState(imageLinkState || "");
  
  const handleImageSave = async () => {
      setImageLink(await uploadImage())
  }

  return {
    article: {
      article,
      setArticle,
      handler: {
        handleBlockType,
        handleRichText,
        handleSave,
      },
    },
    imageCropper: {
      onImageLoad,
      onSelectFile,
      crop,
      setCrop,
      completedCrop,
      imgSrc,
      imgRef,
      uploadImage,
      setCompletedCrop,
    },
    imageHandler : {
        imageLink,
        handleImageSave
    }
  };
}

import React from "react";
import HeaderCard from "../components/Card/HeaderCard";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import Modal from "../components/Modals/Modal";
import PictureCropModal from "../components/Modals/PictureCropModal";
import { useModal } from "../hooks/show/useModal";
import { useProfile } from "../hooks/abstraction/useProfile";
import { useProfileData } from "../hooks/data/useProfileData";
import useUserStore from "../stores/userStore";
import { useUser } from "../hooks/data/useUser";
import pagesApi from "../api/pages/pagesApi";
import HeaderCardEdit from "../components/Card/HeaderCardEdit";
import { EditorState } from "draft-js";
import { useRouter } from "next/router";
import Title from "../components/SEO/Title";

const Profile = () => {
  const { user, userData, changeUser, removeUser } = useUser();
  
  const {
    article: {
      article,
      setArticle,
      handler: { handleBlockType, handleRichText, handleSave },
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
    imageHandler: { imageLink, handleImageSave },
  } = useProfile();

  const dataPusher = async () => {
    let dataPush = {
      userID: parseInt(userData!.id),
      description: handleSave(),
      header_Img_Path: imageLink,
    };
    
    console.log(dataPush);
    let request = await pagesApi.addNewPage(dataPush);
  };

  const [show, setShow, handleClose, handleOpen] = useModal();

  return (
    <NormalPageLayout>
      <Title pageTitle="Profile" description="Edit your personal page"/>
      {userData && 
        <HeaderCardEdit
        imageLink={imageLink}
        name={userData!.nickname}
        handleRichText={handleRichText}
        handleBlockType={handleBlockType}
        handleSave={handleSave}
        article={article}
        setArticle={setArticle}
        dataPusher={dataPusher}
        handleOpenModal={handleOpen} 
        handlePushData={dataPusher}/>
      }
      <Modal show={show} onClose={handleClose}>
        <PictureCropModal
          closeModal={handleClose}
          onSelectFile={onSelectFile}
          imgSrc={imgSrc}
          crop={crop}
          setCrop={setCrop}
          onImageLoad={onImageLoad}
          aspect={0}
          setCompletedCrop={setCompletedCrop}
          imgRef={imgRef}
          uploadImage={uploadImage}
          setCroppedImageLink={handleImageSave}
        />
      </Modal>
    </NormalPageLayout>
  );
};

export default Profile;

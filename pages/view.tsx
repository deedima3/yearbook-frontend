import type { NextPage } from "next";
import ProfileCard from "../components/Card/ProfileCard";
import PasswordInput from "../components/Form/PasswordInput";
import TextInput from "../components/Form/TextInput";
import NormalPageLayout from "../components/Layout/NormalPageLayout";
import BirthdayTitle from "../components/Title/BirthdayTitle";
import CustomTitle from "../components/Title/CustomTitle";
import HeaderCard from "../components/Card/HeaderCard";
import { useImageCropper } from "../hooks/useImageCropper";
import { useModal } from "../hooks/useModal";
import Modal from "../components/Modals/Modal";
import PictureCropModal from "../components/Modals/PictureCropModal";
import CustomButton from "../components/Button/CustomButton";
import { useEffect, useState } from "react";

const View = () => {
  const {
    onImageLoad,
    onSelectFile,
    crop,
    setCrop,
    completedCrop,
    imgSrc,
    imgRef,
    uploadImage,
    setCompletedCrop
  } = useImageCropper(16 / 9);
  const [show, setShow, handleClose, handleOpen] = useModal();
  const [imageLink, setCroppedImageLink] = useState("");

  useEffect(() => {
    console.log(show)
  }, [show])

  return (
    <NormalPageLayout>
      <CustomButton onClick={() => {handleOpen()}}>
        Open Modal
      </CustomButton>
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
          setCroppedImageLink={setCroppedImageLink}
        />
      </Modal>
    </NormalPageLayout>
  );
};

export default View;

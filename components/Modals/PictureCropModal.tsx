import React, { useRef } from "react";
import ReactCrop from "react-image-crop";
import CustomButton from "../Button/CustomButton";
import CustomTitle from "../Title/CustomTitle";

interface Props {
    closeModal : () => void;
    onSelectFile : () => void;
    imgSrc : string;
    crop : any;
    setCrop : (crop: any) => void;
    onImageLoad : () => void;
    aspect : number;
    setCompletedCrop : (crop: any) => void;
    imgRef : any
}

const PictureCropModal = ({closeModal, onSelectFile, imgSrc, crop, setCrop, aspect, onImageLoad, setCompletedCrop, imgRef} : Props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className="flex justify-center border-2 border-black bg-white">
      <div
        className="w-full flex justify-end cursor-pointer"
        onClick={closeModal}
      >
        X
      </div>
      <input
        type="file"
        accept="image/*"
        onChange={onSelectFile}
        className="hidden"
        ref={inputRef}
      />
      <CustomButton onClick={() => {inputRef.current!.click()}}>Select Image</CustomButton>
      <CustomTitle title={inputRef.current?.value!} extraClasses="text-lg" outlineWidth={10}/>
      {Boolean(imgSrc) && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img
            ref={imgRef}
            alt="Crop me"
            src={imgSrc}
            onLoad={onImageLoad}
          />
        </ReactCrop>)}
        </div>
  );
};

export default PictureCropModal;

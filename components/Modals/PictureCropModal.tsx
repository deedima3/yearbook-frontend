import React, { ChangeEvent, SyntheticEvent, useRef } from "react";
import ReactCrop from "react-image-crop";
import CustomButton from "../Button/CustomButton";
import CustomTitle from "../Title/CustomTitle";
import 'react-image-crop/dist/ReactCrop.css'

interface Props {
  closeModal: () => void;
  onSelectFile: (e: ChangeEvent<HTMLInputElement>) => void;
  imgSrc: string;
  crop: any;
  setCrop: (crop: any) => void;
  onImageLoad: (e: SyntheticEvent<HTMLImageElement, Event>) => void;
  aspect: number;
  setCompletedCrop: (crop: any) => void;
  imgRef: any;
  uploadImage: () => Promise<any>;
  setCroppedImageLink: () => void;
}

const PictureCropModal = ({
  closeModal,
  onSelectFile,
  imgSrc,
  crop,
  setCrop,
  aspect,
  onImageLoad,
  setCompletedCrop,
  imgRef,
  uploadImage,
  setCroppedImageLink
}: Props) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <div className="flex flex-col items-center border-2 border-black bg-white w-full max-w-screen-md px-16 py-5 relative">
      <div
        className="w-full flex justify-end cursor-pointer absolute top-0 right-3"
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
      <div className="flex justify-center items-center gap-5">
        <CustomButton
          onClick={() => {
            inputRef.current!.click();
          }}
        >
          Select Image
        </CustomButton>
        <CustomTitle
          title={
            inputRef.current?.value!
              ? inputRef.current?.value!
              : "Insert your image!"
          }
          extraClasses="text-lg"
          outlineWidth={0}
        />
      </div>
      <div className="mt-10">
      {Boolean(imgSrc) && (
        <ReactCrop
          crop={crop}
          onChange={(_, percentCrop) => setCrop(percentCrop)}
          onComplete={(c) => setCompletedCrop(c)}
          aspect={aspect}
        >
          <img ref={imgRef} alt="Crop me" src={imgSrc} onLoad={onImageLoad} />
        </ReactCrop>
      )}
      </div>
      <CustomButton
        onClick={async () => {
          setCroppedImageLink();
        }}
        extraClasses="mt-10"
      >
        Save Image
      </CustomButton>
    </div>
  );
};

export default PictureCropModal;

import { useState, useRef, useEffect } from "react";
import { centerCrop, Crop, makeAspectCrop, PixelCrop } from "react-image-crop";
import { uploadToImageBB } from "../api/imgBB/imgbb";
import { canvasPreview } from "../shared/canvasPreview";


export function useImageCropper(aspectRatio : number) {
  const [imgSrc, setImgSrc] = useState("");
  const imgRef = useRef<HTMLImageElement>(null);
  const [crop, setCrop] = useState<Crop>();
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>();
  const [aspect, setAspect] = useState<number | undefined>(aspectRatio);

  useEffect(() => {
    console.log("imgSrc", imgSrc)
    console.log("crop", crop)
    console.log("completedCrop", completedCrop)
  }, [imgSrc, crop, completedCrop])
  
  function toBlob(canvas: HTMLCanvasElement): any {
    return new Promise((resolve) => {
      canvas.toBlob(resolve)
    })
  }

  async function getCroppedImgBlob(){
    const canvas = document.createElement('canvas')
    canvasPreview(imgRef.current!, canvas, completedCrop!)

    const blob = await toBlob(canvas)
    return blob
  }
  

  function centerAspectCrop(
    mediaWidth: number,
    mediaHeight: number,
    aspect: number
  ) {
    return centerCrop(
      makeAspectCrop(
        {
          unit: "%",
          width: 90,
        },
        aspect,
        mediaWidth,
        mediaHeight
      ),
      mediaWidth,
      mediaHeight
    );
  }

  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined); // Makes crop preview update between images.
      const reader = new FileReader();
      reader.addEventListener("load", () =>
        setImgSrc(reader.result!.toString() || "")
      );
      reader.readAsDataURL(e.target.files[0]);
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget;
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  async function uploadImage(){
    let link = await uploadToImageBB(await getCroppedImgBlob())
    return link
  }

  return {onImageLoad, onSelectFile, crop, setCrop, completedCrop, imgSrc, imgRef, uploadImage, setCompletedCrop}
}

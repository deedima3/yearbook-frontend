import React from "react";

interface Props {
  title: string;
  message: string;
  color?: string;
  shadow?: string;
}

const ToastCard = ({
  title, 
  message,
  color = "",
  shadow = "",
}: Props) => {
  return (
    <div>
   <div className={`absolute inline-flex rounded-full h-12 w-12 -mt-4 -ml-4 outline outline-2 outline-black ${color}`}></div>
    <div className={`flex justify-center py-6 px-10 w-96 bg-white border-2 border-black ${shadow}`}>
        <div className="flex flex-col text-center items-center gap-2">
            <h1 className={`text-2xl font-bold text-${color}`}>{title}</h1>
            <h3 className="text-lg">{message}</h3>
        </div>
    </div>
    </div>
  );
};

export default ToastCard;

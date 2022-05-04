import React from "react";

interface Props {
  title: string;
  desc: string;
  extraClasses?: string;
  size?: string;
}

const CustomTitle = ({
  title, desc,
  extraClasses = "",
  size,
}: Props) => {
  return (
    <div className="flex justify-center text-center">
    <div className="flex flex-col gap-6">
        <h1 className={`stroke-md stroke-black text-brand-brown text-6xl ${extraClasses}`}>
          {title}
        </h1>
        <p className={`text-white mx-auto ${size}`}>
          {desc}
        </p>
    </div>
    </div>
  );
};

export default CustomTitle;
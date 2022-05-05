import React from "react";
import styles from "./CustomTitle";

interface Props {
  title: string;
  desc: string;
  extraClasses?: string;
  size?: string;
}

const CustomTitle = ({ title, desc, extraClasses = "", size }: Props) => {
  return (
    <div className="flex justify-center text-center">
      <div className="flex flex-col gap-6">
        <div className="relative">
          <div className="static">
            <h1
              style={{ WebkitTextStroke: "8px black" }}
              className={`stroke-md stroke-black text-brand-brown text-6xl ${extraClasses}`}
            >
              {title}
            </h1>
          </div>
          <div className="absolute inset-0 z-20">
            <h1
              className={`stroke-md stroke-black text-brand-brown text-6xl ${extraClasses}`}
            >
              {title}
            </h1>
          </div>
        </div>
        <p className={`text-white mx-auto ${size}`}>{desc}</p>
      </div>
    </div>
  );
};

export default CustomTitle;

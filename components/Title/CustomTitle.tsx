import React from "react";
import styles from "./CustomTitle";

interface Props {
  title: string;
  desc?: string;
  extraClasses?: string;
  extraClassesSub?: string;
  outlineWidth? : number;
}

const CustomTitle = ({ title, desc, extraClasses = "", extraClassesSub, outlineWidth=2 }: Props) => {
  return (
      <div className="flex flex-col gap-6">
        <div className="relative">
          <div className="static">
            <h1
              style={{ WebkitTextStroke: `${outlineWidth}px black` }}
              className={`stroke-md stroke-black text-brand-brown ${extraClasses}`}
            >
              {title}
            </h1>
          </div>
          <div className="absolute inset-0 z-20">
            <h1
              className={`stroke-md stroke-black text-brand-brown ${extraClasses}`}
            >
              {title}
            </h1>
          </div>
        </div>
        {
          desc ? <p className={`text-white mx-auto ${extraClassesSub}`}>{desc}</p> : null
        }
      </div>
  );
};

export default CustomTitle;

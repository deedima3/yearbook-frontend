import React from "react";

interface Props {
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  extraClasses?: string;
  onClick?: () => void;
}

const CustomButton = ({
  children,
  type = "button",
  extraClasses = "",
  onClick = () => {},
}: Props) => {
  return (
    <button
      className={`border-black text-white font-bold bg-brand-brown py-2 px-6 border-2 hover:-translate-x-2 hover:-translate-y-2 font-IBM hover:shadow-button-shadow transition-all duration-100 ${extraClasses}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;

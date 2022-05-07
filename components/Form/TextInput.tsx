import React from "react";

interface Props {
  title: string;
  placeholder: string;
  type?: string;
}

const TextInput = ({
  title, 
  placeholder,
  type = "",
}: Props) => {
  return (
    <div className="flex flex-col w-1/3 gap-1">
    <label htmlFor={type} className="text-white text-lg">{title}</label>
        <div className="flex outline outline-2 w-full rounded items-center hover:outline-yellow-600 focus:outline-yellow-600">
        <input 
            type={type}
            className="w-full pl-5 rounded h-11 outline-none"
            placeholder={placeholder}
        />
      </div>
  </div>
  );
};

export default TextInput;

import { useState } from "react";

interface Props {
    title: string;
    placeholder: string;
}

const PasswordInput = ({title, placeholder}:Props) => {
  const [pwdShown, setPwdShown] = useState(false);

  const togglePassword = () => {
    setPwdShown(!pwdShown);
  };

  return (
    <div className="flex justify-center">
    <div className="flex flex-col w-1/3">
      <label className="text-white text-lg mb-1">{title}</label>
        <div className="flex outline outline-2 w-full rounded items-center md:hover:outline-yellow-600">
          <input 
              type={pwdShown ? "text" : "password"} 
              className="w-full pl-5 rounded h-11 outline-none"
              placeholder={placeholder}
          />
          <div className="flex items-center w-max">
             <button 
                 onClick={togglePassword}
                 className="bg-white px-5 rounded -ml-2 h-11"
             >
                {pwdShown ? <img src="./eye-off.svg" alt="open"/> : <img src="./eye.svg" alt="hide"/>}
             </button>
          </div>
        </div>
    </div>
    </div>
  );
}

export default PasswordInput;

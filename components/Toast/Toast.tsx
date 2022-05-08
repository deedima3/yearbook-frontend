  import { AnimatePresence, motion } from "framer-motion";
  import React, { useEffect, useState } from "react";
  import ReactDOM from "react-dom";
  import { ToastProps } from "../../interfaces/toastInterfaces";
  
  const Toast = ({ show, title, variant, extraClass, message }: ToastProps) => {
    
    const [_document, setDocument] = useState<Document | null>(null);

    useEffect(() => {
      setDocument(document);
    }, []);

    const getColor = () => {
      switch (variant) {
        case "success":
          return "bg-brand-green text-brand-green";
        case "warning":
          return "bg-yellow-500 text-yellow-500";
        case "error":
          return "bg-brand-red text-brand-red";
        default:
          return "bg-black";
      }
    };
  
    const getShadow = () => {
      switch (variant) {
        case "success":
          return "shadow-success-shadow";
        case "warning":
          return "shadow-warning-shadow";
        case "error":
          return "shadow-failed-shadow";
        default:
          return null;
      }
    };
  
    const toast = (
      <AnimatePresence>
        {show && <motion.div
          key="toast"
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, opacity: { ease: "linear" } }}
          className="absolute bottom-0 right-0 py-8 px-10 z-20"
        >
            <div className={`absolute inline-flex rounded-full h-12 w-12 -mt-4 -ml-4 outline outline-2 outline-black ${getColor()}`}></div>
            <div className={`flex justify-center py-6 px-10 w-96 bg-white border-2 border-black ${getShadow()}`}>
                <div className="flex flex-col text-center items-center gap-2">
                    <h1 className={`text-2xl font-bold text-${getColor()}`}>{title}</h1>
                    <h3 className="text-lg">{message}</h3>
                </div>
            </div>
          {/* <div
            className={`bg-brand-black-secondary rounded-md flex px-20 py-10 justify-between w-full gap-10`}
          >
            <div className="flex items-center">{getIcons()}</div>
            <div className={`w-0.5 ${getColor()}`} />
            <div className="text-white justify-center flex flex-col">
              <h1 className="text-xl font-bold">{title}</h1>
              <h3 className="text-md">{message}</h3>
            </div>
          </div> */}
        </motion.div>}
      </AnimatePresence>
    )
          
    if(_document){
        return ReactDOM.createPortal(toast, _document.getElementById("toast")!);
      }else {
        return null;
      }
  };
  
  export default Toast;
  
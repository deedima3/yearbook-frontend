import { motion } from "framer-motion";
import React from "react";

interface Overlay {
  children: JSX.Element;
}

const ModalOverlay = ({ children }: Overlay) => {
  return (
    <motion.div
      key="modal"
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, opacity: { ease: "linear" } }}
      className={`absolute bottom-0 right-0 top-0 left-0 bg-black flex justify-center items-center z-50 bg-opacity-40`}
    >
      {children}
    </motion.div>
  );
};

export default ModalOverlay;

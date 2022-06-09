import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";
import ModalOverlay from "../Modals/ModalOverlay";
import ReactDOM from "react-dom";
import CustomTitle from "../Title/CustomTitle";

export interface LoaderProps {
  isLoading: boolean;
  progress: number;
}

const Loader = ({ isLoading, progress }: LoaderProps) => {
  const [_document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    setDocument(document);
  }, []);

  const loader = (
    <AnimatePresence>
      {isLoading && (
        <ModalOverlay>
          <div className="flex flex-col items-center w-full">
            <div className="bg-black border-2 border-black w-full max-w-lg h-8 mt-10">
              <div
                className="bg-gradient-to-r from-loader-red to-loader-yellow max-w-lg h-7 bg-[length:200%] animate-background"
                style={{ width: progress }}
              ></div>
            </div>
          </div>
        </ModalOverlay>
      )}
    </AnimatePresence>
  );

  if (_document) {
    return ReactDOM.createPortal(loader, _document.getElementById("modal")!);
  } else {
    return null;
  }
};

export default Loader;

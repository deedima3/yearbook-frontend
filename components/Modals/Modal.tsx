import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "./ModalOverlay";

export interface ModalProps {
  show: boolean;
  onClose: () => void;
  children: JSX.Element;
  title?: string | null;
  extraClass?: string;
}

export default function Modal({ show, onClose, children, title, extraClass}: ModalProps) {
  const [_document, setDocument] = useState<Document | null>(null);

  useEffect(() => {
    setDocument(document);
  }, []);

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <ModalOverlay>
        {children}
    </ModalOverlay>
  ) : null;

  if(_document){
    return ReactDOM.createPortal(
      modalContent,
      _document.getElementById("modal")!
    );
  }else {
    return null;
  }
}

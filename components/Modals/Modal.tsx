import React, { useState } from "react";
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

  const handleCloseClick = (e: any) => {
    e.preventDefault();
    onClose();
  };

  const modalContent = show ? (
    <ModalOverlay>
        {children}
    </ModalOverlay>
  ) : null;

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal")!
  );
}

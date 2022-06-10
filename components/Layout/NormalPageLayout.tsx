import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const NormalPageLayout = ({ children }: Props) => {
  return (
    <div className="bg-grid-pattern-2 bg-grid-pattern-size bg-blue-bg font-Inter min-h-screen">
      <Navbar />
      <div className="flex flex-col w-full items-center pt-24">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default NormalPageLayout;

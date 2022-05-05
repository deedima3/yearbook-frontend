import Link from "next/link";
import React from "react";
import CustomButton from "../Button/CustomButton";
import CustomLinkButton from "../Button/CustomLinkButton";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  return (
    <nav className="flex justify-center">
      <div className="flex justify-between max-w-screen-2xl w-full py-5 px-5 mx-5">
        <div className="cursor-pointer w-30">
          <Link href={"/"}>
            <img src="Logo.png" alt="Brand Logo" />
          </Link>
        </div>
        <div className="flex justify-between font-IBM items-center gap-10 text-white text-2xl">
          <NavbarLink text="SEARCH" href="/people" />
          <NavbarLink text="HOME" href="/" />
          <NavbarLink text="BIRTHDAY" href="/birthday" />
        </div>
        <div className="flex justify-between items-center gap-5">
          <CustomLinkButton href={"/login"}>LOGIN</CustomLinkButton>
          <CustomLinkButton href={"/register"}>REGISTER</CustomLinkButton>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

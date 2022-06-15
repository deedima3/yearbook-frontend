import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useUser } from "../../hooks/data/useUser";
import useUserStore from "../../stores/userStore";
import CustomButton from "../Button/CustomButton";
import CustomLinkButton from "../Button/CustomLinkButton";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const {user, userData, changeUser, removeUser} = useUser()
  const [navbarColor, setNavbarColor] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >=10) {
      setNavbarColor(true)
    }
    else{
      setNavbarColor(false);
    }
  };

  useEffect(function mount() {
    changeNavbarColor()
    window.addEventListener('scroll', changeNavbarColor);
    return function unMount() {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  })

  return (
    <nav className={ `${navbarColor ? 'bg-[#062F99] shadow-md' : 'bg-transparent'} 
      flex justify-center mb-12 fixed w-full z-30 transition-all ease-in-out duration-200 `}>
      <div className="flex justify-between max-w-screen-2xl w-full py-3 px-5 mx-5">
        <div className="cursor-pointer w-30">
          <Link href={"/"}>
            <img src="/Logo.png" alt="Brand Logo" className="w-24" />
          </Link>
        </div>
        <div className="flex justify-between font-IBM items-center gap-10 text-white text-2xl">
          <NavbarLink text="SEARCH" href="/people" />
          <NavbarLink text="HOME" href="/" />
          <NavbarLink text="BIRTHDAY" href="/birthday" />
          {user ? (
            <>
              <NavbarLink text="PROFILE" href="/profile" />
            </>
          ) : (
            ""
          )}
        </div>
        <div className="flex justify-between items-center gap-5">
          {user ? (
            <CustomButton onClick={removeUser}>
              LOGOUT
            </CustomButton>
          ) : (
            <>
              <CustomLinkButton href={"/login"}>LOGIN</CustomLinkButton>
              <CustomLinkButton href={"/register"}>REGISTER</CustomLinkButton>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

import Link from "next/link";
import React from "react";
import useUserStore from "../../stores/userStore";
import CustomButton from "../Button/CustomButton";
import CustomLinkButton from "../Button/CustomLinkButton";
import NavbarLink from "./NavbarLink";

const Navbar = () => {
  const user = useUserStore((state) => state.user);
  const removeUser = useUserStore((state) => state.removeUser);

  return (
    <nav className="flex justify-center">
      <div className="flex justify-between max-w-screen-2xl w-full py-5 px-5 mx-5">
        <div className="cursor-pointer w-30">
          <Link href={"/"}>
            <img src="/Logo.png" alt="Brand Logo" />
          </Link>
        </div>
        <div className="flex justify-between font-IBM items-center gap-10 text-white text-2xl">
          <NavbarLink text="SEARCH" href="/people" />
          <NavbarLink text="HOME" href="/" />
          <NavbarLink text="BIRTHDAY" href="/birthday" />
          {user ? (
            <>
              <NavbarLink text="Edit Profile" href="/profile" />
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

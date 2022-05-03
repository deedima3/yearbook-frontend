import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface Props {
  text : string;
  href: string;
}

const NavbarLink = ({ text, href }: Props) => {
  const router = useRouter();
  return (
    <Link href={href}>
      <p className={`hover:font-bold cursor-pointer transition-all duration-100 ${router.pathname == href ? "font-bold" : ""}`}>
          {text}
      </p>
    </Link>
  );
};

export default NavbarLink;

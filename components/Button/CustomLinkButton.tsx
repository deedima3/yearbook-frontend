import Link from 'next/link';
import React from 'react'
import CustomButton from './CustomButton';

interface Props {
    children: React.ReactNode;
    type?: "button" | "submit" | "reset";
    extraClasses?: string;
    onClick?: () => void;
    href : string;
  }

const CustomLinkButton = ({children, type, extraClasses, onClick, href} : Props) => {
  return (
    <Link href={href}>
        <CustomButton onClick={onClick} type={type} extraClasses={extraClasses}>
            {children}
        </CustomButton>
    </Link>
  )
}

export default CustomLinkButton
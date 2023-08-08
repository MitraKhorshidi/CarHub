import Link from "next/link";
import Image from "next/image";
import React from "react";
import CustomButton from "./CustomButton";

const NavBar = () => {
  return (
    <header className="w-full absolute z-10">
      <nav className="max-w-[1440px] mx-auto flex justify-between items-center px-16 md:px-6 md:py-4">
        <Link href="/">
          <Image
            src="/logo.svg"
            alt="Car Hub logo"
            width={118}
            height={18}
            className="object-container"
          />
        </Link>
        
        <CustomButton
          title="Sign In"
          btnType="button"
          containerStyles="bg-white min-w-[130px] rounded-full text-primary-blue"
        />
      </nav>
    </header>
  );
};

export default NavBar;

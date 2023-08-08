"use Client";
import React from "react";
import Image from "next/image";
import { CustomButtonProps } from "@/types";

const CustomButton = ({title , rightIcon , containerStyles , textStyles , btnType , handleClick } : CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      onClick={handleClick}
      className={`custom-btn ${containerStyles}`}
    >
      <span className={`flex-1 ${textStyles}`}>{title}</span>
      {rightIcon && <Image src={rightIcon} alt="icon" width={30} height={30}/>}
    </button>
  );
};

export default CustomButton;

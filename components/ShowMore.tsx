"use client";
import React from "react";
import { ShowMoreProps } from "@/types";
import CustomButton from "./CustomButton";

const ShowMore = ({ pageNumber, isNext ,setLimit}: ShowMoreProps) => {
  const handleNavigation = () => {

    const newLimit= (pageNumber+1)*10;
    setLimit(newLimit);

  };
  return (
    <div className="w-full flex justify-center text-center mt-8">
      {!isNext && (
        <CustomButton
          title="Show More"
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full p-1"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
};

export default ShowMore;

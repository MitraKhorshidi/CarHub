"use client";

import React, { useState } from "react";
import { carProps } from "@/types";
import { calculateCarRent, carImageUrlGenarator } from "@/utils";
import Image from "next/image";
import CustomButton from "./CustomButton";
import CarDetails from "./CarDetails";

interface carCardProps {
  car: carProps;
}

const CarCard = ({ car }: carCardProps) => {
  const {
    city_mpg,
    displacement,
    drive,
    fuel_type,
    highway_mpg,
    make,
    model,
    transmission,
    year,
  } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group m-4">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <div>
        <p className="flex mt-6 font-extrabold text-2xl">
          <span className="text-sm self-start">$</span>
          {carRent}
          <span className="text-sm self-end">/day</span>
        </p>
      </div>
      <div className="object-contain w-full relative my-3 h-40">
        <Image
          src={carImageUrlGenarator(car)}
          alt="car"
          fill
          priority
          className="object-contain"
        />
      </div>
      <div className="flex relative w-full mt-2">
        <div className="w-full flex group-hover:invisible justify-between text-gray">
          <div className="flex flex-col items-center gap-y-2">
            <Image
              src="/steering-wheel.svg"
              alt="steering"
              width={20}
              height={20}
            />
            <p className="text-xs">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image src="/tire.svg" alt="tire" width={20} height={20} />
            <p className="text-xs">{drive.toUpperCase()}</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-y-2">
            <Image src="/gas.svg" alt="gas" width={20} height={20} />
            <p className="text-xs">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <CustomButton
            title=" View more"
            containerStyles="bg-primary-blue w-full rounded-full"
            textStyles="text-white font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>
      <CarDetails car={car} isOpen={isOpen} closeModal={()=>setIsOpen(false)}/>
    </div>
  );
};

export default CarCard;

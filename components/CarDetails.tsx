import React, { Fragment } from "react";
import { carProps } from "@/types";
import { Transition, Dialog } from "@headlessui/react";
import Image from "next/image";
import { carImageUrlGenarator } from "@/utils";

interface CarDetailsProps {
  car: carProps;
  isOpen: boolean;
  closeModal: () => void;
}

const CarDetails = ({ car, closeModal, isOpen }: CarDetailsProps) => {
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
  return (
    <>
      <Transition as={Fragment} show={isOpen} appear>
        <Dialog open={isOpen} onClose={closeModal} className="relative z-10">
          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="bg-black fixed bg-opacity-25 inset-0"></div>
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="p-4 min-h-full flex justify-center items-center">
              <Transition.Child
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              ></Transition.Child>
              <Dialog.Panel className="relative flex flex-col bg-white max-w-lg max-h-[90vh] overflow-y-auto transform transition-all rounded-lg shadow-xl px-4 py-3">
                <button onClick={closeModal}>
                  <Image
                    src="/close.svg"
                    alt="close"
                    width={30}
                    height={30}
                    className="object-contain absolute top-2 right-2 z-10 rounded-full bg-white p-1.5 shadow-sm"
                  />
                  <div className=" relative bg-pattern bg-cover w-full h-32 rounded-lg">
                    <Image src={carImageUrlGenarator(car)} alt="car" fill className="object-contain" />
                  </div>
                  <div className="grid grid-cols-3 gap-1.5  mt-2">
                    <div className="relative  bg-primary-blue-100 rounded-md h-20">
                        <Image src={carImageUrlGenarator(car,'29')} alt="car" fill className="object-contain"/>
                    </div>
                    <div className="relative  bg-primary-blue-100  rounded-md h-20 ">
                        <Image src={carImageUrlGenarator(car,'33')} alt="car" fill className="object-contain"/>
                    </div>
                    <div className="relative  bg-primary-blue-100 rounded-md h-20 ">
                        <Image src={carImageUrlGenarator(car,'23')} alt="car" fill className="object-contain"/>
                    </div>
                  </div>
                </button>
                {Object.entries(car).map(([key, value]) => (
                  <div className="flex flex-row justify-between gap-x-40 mt-2" key={key}>
                    <h4 className="capitalize text-gray-500 text-sm">{key.split("_").join(" ")}</h4>
                    <p className="font-medium">{value}</p>
                  </div>
                ))}
              </Dialog.Panel>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CarDetails;

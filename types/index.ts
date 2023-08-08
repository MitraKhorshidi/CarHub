import { MouseEventHandler } from "react";

export interface CustomButtonProps {
    title : string ;
    containerStyles ?: string ;
    textStyles ?: string ;
    rightIcon ?: string; 
    btnType ?: "button" | "reset" ;
    handleClick ?: MouseEventHandler<HTMLButtonElement>;
}

export interface SearchManufacturerProps{
    selected: string;
    setSelected: (searchManufacturer : string )=> void;
}

export interface carProps{
    city_mpg: number;
    class: string;
    combination_mpg: number;
    cylinders: number;
    displacement: number;
    drive: string;
    fuel_type: string;
    highway_mpg: number;
    make: string;
    model: string;
    transmission: string;
    year: number;
}

export interface FilterProps{
    model :string ;
    manufacturer : string;
    year :number;
    fuel : string ;
    limit : number;
}

export interface HomeProps {
    searchParams : FilterProps;
}

export interface ShowMoreProps{
    pageNumber :number ;
    isNext :boolean ;
    setLimit : (limit:number)=>void;
}

export interface SerachBarProps{
    setManufacturer : (manufacturer: string)=>void;
    setModel:(model: string)=>void;
}
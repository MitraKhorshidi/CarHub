import { FilterProps, carProps } from "@/types";
export async function fetchCars(filters : FilterProps){
    const {model ,manufacturer , year, fuel , limit} = filters;
    const headers ={
        'X-RapidAPI-Key': '7a79c209cdmshc4ee649bb373deap1876b4jsnbb99bda9da4d',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch( `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&model=${model}&year=${year}&fuel_type=${fuel}&limit=${limit}` ,
        {headers : headers}
    );

    const result = await response.json();

    return result;
    
}

export const carImageUrlGenarator=(car: carProps , angle ?: string)=>{

    const url = new URL('https://cdn.imagin.studio/getimage');

    const {make , year , model } = car;

    url.searchParams.append('customer' , 'hrjavascript-mastery');
    url.searchParams.append('make' , make);
    url.searchParams.append('modelYear' , `${year}`);
    url.searchParams.append('modelFamily' , model.split(' ')[0]);
    url.searchParams.append('angle' , `${angle}`);
    url.searchParams.append('zoomType' , 'fullscreen');
    return `${url}`;
}


export const updateSearchParams = (type: string, value: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    searchParams.set(type,value);
    const newPathName = `${window.location.pathname}?${searchParams.toString()}`
    return (newPathName);
  };



export const calculateCarRent = (city_mpg: number, year: number) => {
    const basePricePerDay = 50; // Base rental price per day in dollars
    const mileageFactor = 0.1; // Additional rate per mile driven
    const ageFactor = 0.05; // Additional rate per year of vehicle age
  
    // Calculate additional rate based on mileage and age
    const mileageRate = city_mpg * mileageFactor;
    const ageRate = (new Date().getFullYear() - year) * ageFactor;
  
    // Calculate total rental rate per day
    const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;
  
    return rentalRatePerDay.toFixed(0);
  };
  
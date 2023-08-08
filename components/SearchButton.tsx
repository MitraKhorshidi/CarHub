import React from 'react';
import Image from 'next/image';

const SearchButton = ({otherClasses} :{ otherClasses?: string}) => {
  return (
    <button type='submit' className={`z-10 -ml-3 ${otherClasses}`}>
        <Image src='/magnifying-glass.svg' alt='serach' width={40} height={40} className='object-contain' />
    </button>
  )
}

export default SearchButton
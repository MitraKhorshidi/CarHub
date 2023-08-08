"use client";
import Image from "next/image";
import React, { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import SearchButton from "./SearchButton";
import { SerachBarProps } from "@/types";

const SearchBar = ({ setManufacturer, setModel }: SerachBarProps) => {
  const [serchManufacturer, setSearchManufacturer] = useState("");
  const [serchModel, setSearchModel] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (serchManufacturer === "" && serchModel === "") {
      return alert("Please fill the search items.");
    }
    setManufacturer(serchManufacturer);
    setModel(serchModel);
  };

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={serchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute ml-4"
        />
        <input
          className="searchbar__input"
          type="text"
          name="model"
          value={serchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tigaun"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;

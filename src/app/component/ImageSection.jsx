'use client';

import React, { useState } from "react";

export default function ImageSection({ handleSearchChange }) {
  const [searchQuery, setSearchQuery] = useState(""); 

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearchChange(query); 
  };

  return (
    <section
      style={{
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
      className="h-[50vh] justify-center content-center"
    >
      <div className="flex flex-col gap-[80px] text-center font-black">
        <h1 className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Discover Your New Home
        </h1>
        <h3 className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Helping 100 million renters find their perfect fit.
        </h3>
        <div className="hover:scale-110 transform transition-transform duration-400">
          <input
            type="search"
            value={searchQuery}
            onChange={handleSearch} 
            name="search"
            id="search"
            className="lg:w-[500px] md:w-[400px] sm:w-[200px] h-[50px] rounded-[20px] text-center cursor-pointer"
            placeholder="Search your cart"
          />
        </div>
      </div>
    </section>
  );
}

'use client';

import React, { useContext, useState, useEffect } from "react";
import { products } from "@/app/component/data";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ImageSection from "@/app/component/ImageSection";
import Button from "@/app/component/Button";
import { SideBarContext } from "@/app/providers";

export default function Shop() {
  const { cart } = useContext(SideBarContext);  

  const [filteredProducts, setFilteredProducts] = useState(products);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    
    if (searchQuery === "") {
      setFilteredProducts(products);  
    } else {
      
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredProducts(filtered); 
    }
  }, [searchQuery]);

  
  const handleSearchChange = (query) => {
    setSearchQuery(query);
  };

  const productCart = filteredProducts.map((product) => (
    <section
      key={product.id}
      className="flex flex-col items-center hover:shadow-2xl align-center justify-center content-center border border-solid lg:w-[80%] rounded-b-[20px]"
    >
      <Link
        href={`/Shop/${product.name.replaceAll(" ", "_")}`}
        title={`${product.name} is a type of ${product.category}`}
      >
        <div className="flex justify-center border-solid object-cover">
          <Image
            loading="lazy"
            className="w-[420px] h-[260px]"
            src={product.imageUrl}
            alt={product.name}
            width={200}
            height={200}
          />
        </div>
        <div className="text-center">
          <h2>
            <strong>{product.name}</strong>
          </h2>
          <p>{product.category}</p>

          <div className="flex flex-row gap-1 justify-center">
            <div className="flex flex-row justify-center gap-1">
              <p>
                <strong>{product.rating}</strong>
              </p>
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
              <FaStar style={{ color: "orange" }} />
            </div>
          </div>
          <p>&#8358; {product.price.toLocaleString()}</p>
          <p className="pb-3">
            <strong>{product.availability}</strong>
          </p>
        </div>
      </Link>
      <Button product={product} />
    </section>
  ));

  return (
    <div className="font-sans text-base">
      <div className="flex justify-center p-10 bg-[url('https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center pb-[20px]">

        <ImageSection handleSearchChange={handleSearchChange} />
      </div>
      <div className="flex align-center justify-center content-center">
        <div className="grid lg:grid-cols-2 lg:gap-[15px] mx-0 lg:w-[80%] lg:p-[40px]">
          {productCart}
        </div>
      </div>
    </div>
  );
}

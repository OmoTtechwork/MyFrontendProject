import React from "react";
import { products } from "@/app/component/data";
import Link from "next/link";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import ImageSection from "./ImageSection";

export default function HomeSearch() {
  const productCart = products.slice(0, 4).map((product) => (
    <section
      key={product.id}
      className="flex flex-col items-center hover:shadow-2xl align-center justify-center content-center border border-solid   rounded-[20px]"
    >
      <Link
        href={`/Cart/${product.name.replaceAll(" ", "_")}`}
        title={`${product.name} is a type of ${product.category}`}
      >
        <div className="flex justify-center border-b-2 border-solid w-[inherit] ">
          <Image
            src={`https://robohash.org/${product.id}`}
            alt={product.name}
            width={300}
            height={200}
          />
        </div>
        <div className="text-center">
          <h2>
            <strong>{product.name}</strong>
          </h2>
          <p>{product.category}</p>

          <div className="flex flex-row gap-1 justify-center">
            <p>
              <strong>{product.rating}</strong>
            </p>
            <FaStar style={{ color: "orange" }} />
          </div>
          <p>{product.availability}</p>
        </div>
      </Link>
    </section>
  ));
  return (
    <div>
      <div className="flex justify-center bg-[url('https://images.pexels.com/photos/5524166/pexels-photo-5524166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center pb-[20px]">
        <ImageSection />
      </div>
      <div className="flex align-center justify-center content-center ">
        <div className="grid grid-cols-4 gap-[15px] mx-0 w-[90%] p-[40px]">
          {productCart}
        </div>
      </div>
      <div className="flex justify-center align-center content-center p-[20px] text-white font-extrabold ">
        <div className="border border-solid w-[170px] text-center p-[14px] rounded-[10px] hover:scale-110 transform transition-transform duration-400 bg-sky-700">
          <a href="/Cart">View More</a>
        </div>
      </div>
    </div>
  );
}

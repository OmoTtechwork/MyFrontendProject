import React from "react";
import { products } from "@/app/component/data";
import Image from "next/image";
import Link from "next/link";
import { Urls } from "@/app/component/secondData";

export default async function SlugForCart({ params }) {
  const slugProduct = await params;
  const productDetails = products.find(
    (product) => product.name.split(" ").join("_") == slugProduct.Slug
  );
  const relatedProduct = products
    .filter(
      (product) =>
        product.bedrooms == productDetails.bedrooms &&
        productDetails.name !== product.name
    )
    .map((checkProduct) => (
      <section
        key={checkProduct.id}
        className="flex flex-col items-center hover:shadow-2xl"
      >
        <Link
          href={`/Cart/${checkProduct.name.replaceAll(" ", "_")}`}
          title={`${checkProduct.name} is a type of ${checkProduct.name}`}
        >
          <Image
            loading="lazy"
            className="w-full h-[300px]"
            src={checkProduct.imageUrl}
            alt={checkProduct.name}
            width={200}
            height={200}
          />
          <div className="text-center">
            <h2>{checkProduct.name}</h2>
            <p>{checkProduct.category}</p>
          </div>
        </Link>
      </section>
    ));
  const relatedImages = Urls.filter(
    (product) => product.id == productDetails.id
  ).map((urlProduct) => (
    <div key={urlProduct.id} className="flex justify-center bg-gray-200">
      <div className="grid grid-cols-4 grid-rows-2  border-4">
        <Image
          loading="lazy"
          src={urlProduct.url1}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
        <Image
          loading="lazy"
          src={urlProduct.url2}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
        <Image
          loading="lazy"
          src={urlProduct.url3}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
        <Image
          loading="lazy"
          src={urlProduct.url4}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
        <Image
          loading="lazy"
          src={urlProduct.url5}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
        <Image
          loading="lazy"
          src={urlProduct.url6}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
        <Image
          loading="lazy"
          src={urlProduct.url7}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
        <Image
          loading="lazy"
          src={urlProduct.url8}
          className="border border-solid w-full lg:h-[250px]"
          alt={productDetails.name}
          width={320}
          height={200}
        />
      </div>
    </div>
  ));

  return (
    <div className="font-sans text-base">
      {relatedImages}

        <section className="lg:flex md:flex lg:flex-row md:gap-[50px] py-[40px] lg:gap-[100px] w-[100%] justify-center">
          <div>
            <Image
              loading="lazy"
              src={productDetails.imageUrl}
              className="pt-10 "
              alt={productDetails.name}
              width={600}
              height={300}
            />
            <h1 className="text-center font-bold sm:text-lg md:text-xl lg:text-xl">
              {productDetails.name}
            </h1>
            <p className="text-center font-bold sm:text-base md:text-lg lg:text-lg">
              &#8358; <strong>{productDetails.price.toLocaleString()}</strong>
            </p>
          </div>
          <div className="justify-center align-center content-center">
            <div className="lg:w-[500px] lg:h-[600px]">
              <div className="font-bold sm:text-lg md:text-xl lg:text-2xl py-[20px] text-center">
                <p className="lg:p-2  md:p-2 sm:p-1 bg-black text-white sm:rounded-[3px] md:rounded-[7px] lg:rounded-[10px] ">
                  {productDetails.category}
                </p>
              </div>

              <p className="lg:pb-[20px] md:pb-[20px] sm:pb-[10px] px-2 text-center">
                {productDetails.description}
              </p>

              <div className="lg:pb-[20px] md:pb-[20px] sm:pb-[10px] px-2 text-center">
                <div className="font-semibold sm:text-lg md:text-xl lg:text-2xl py-[20px] text-center">
                  <p className="lg:p-2 md:p-2 sm:p-1 bg-black text-white rounded-[10px] ">
                    Agent Contact Info
                  </p>
                </div>
                <div>
                  <p>{productDetails.listingAgent.name}</p>

                  <p>{productDetails.listingAgent.contact}</p>

                  <p>{productDetails.listingAgent.phone}</p>
                </div>
              </div>

              <div className="lg:pb-[20px] md:pb-[20px] sm:pb-[10px] px-2 text-center">
                <div className="font-semibold sm:text-lg md:text-xl lg:text-2xl pb-[20px] text-center">
                  <p className="lg:p-2 md:p-2 sm:p-1 bg-black text-white rounded-[10px] ">
                    Building details
                  </p>
                </div>
                <div>
                  <p><strong>{productDetails.availability}</strong></p>

                  <p>{productDetails.size}</p>

                  <p>{productDetails.amenities}</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      <section className="w-[100%]">
        <h2 className="lg:py-4 md:py-3 sm:py-2 bg-gray-700 capitalize text-center font-bold text-white sm:text-2xl md:text-2xl lg:text-3xl sm:border-y-2 md:border-y-4 lg:border-y-8 mx-4 my-7">
          Similar Buildings with {productDetails.bedrooms} bedroom
        </h2>
        <div className="flex justify-center p-10">
          <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 w-[100%] sm:gap-3 md:gap-6 lg:gap-10">
            {relatedProduct}
          </div>
        </div>
      </section>
    </div>
  );
}

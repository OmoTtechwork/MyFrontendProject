import Image from "next/image";
import React from "react";
import AboutRealEstate from "./component/Faq";
import Link from "next/link";
import { MdRealEstateAgent } from "react-icons/md";
import IconNav from "./component/NavIcon";
import RealEstateConcept from "./component/RealEstate";
import HomeSearch from "./component/HomeSearch";

export default function Home() {
  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div >
        <HomeSearch />
      </div>
      <section className="lg:h-[370vh]">
        <section className="w-[100%] h-[92vh] bg-slate-300 items-center justify-center content-center flex flex-col">
          <Link href="/Cart">
            <MdRealEstateAgent size={90} />
          </Link>
          <h2 className="py-4 text-2xl font-bold text-center">
            Explore the Best Real Estate Opportunities Near You
          </h2>
        </section>

        <section>
          <div>
            <RealEstateConcept />
          </div>
        </section>

        <section>
          <div className="flex justify-center sm:p-4 md:p-6 lg:p-12 font-sans">
            <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-screen-lg">
              <div className="flex flex-col justify-center gap-2 bg-gray-200 p-4 sm:p-4 md:p-6 lg:p-8 h-64 md:h-56 lg:h-60">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
                  Advertise Your Rental
                </h1>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  Unlock the potential of your property by connecting with over
                  75 million renters searching for their next home.
                </p>
                <Link
                  href="/Login"
                  className="mt-2 border-gray-700 px-3 py-2 text-xs sm:text-sm lg:text-base font-bold hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                  List Your Property
                </Link>
              </div>

              <div className="">
                <Image
                  src="https://images.pexels.com/photos/18774966/pexels-photo-18774966/free-photo-of-walls-of-house-in-town.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="Modern Town Architecture"
                  width={500}
                  height={300}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="">
                <Image
                  src="https://images.pexels.com/photos/8293778/pexels-photo-8293778.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Apartment Building Exterior"
                  width={500}
                  height={300}
                  className="w-full h-40 sm:h-48 md:h-56 lg:h-60 object-cover"
                  loading="lazy"
                />
              </div>

              <div className="flex flex-col justify-center gap-2 bg-gray-100 p-4 sm:p-4 md:p-6 lg:p-8 h-64 md:h-56 lg:h-60">
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
                  Lease 100% Online
                </h1>
                <p className="text-xs sm:text-sm md:text-base leading-relaxed">
                  Simplify your property management with our fully digital
                  platform. From accepting rental applications to signing leases
                  and processing rent payments securely, everything can be
                  managed online.
                </p>
                <Link
                  href="/Login"
                  className="mt-2 border-gray-700 px-3 py-2 text-xs sm:text-sm lg:text-base font-bold hover:bg-gray-700 hover:text-white transition-all duration-300"
                >
                  Manage Your Property
                </Link>
              </div>
            </div>
          </div>

          <div>
            <div className="pb-20">
              <AboutRealEstate />
            </div>
            <div className="hidden lg:block ">
              <IconNav />
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}

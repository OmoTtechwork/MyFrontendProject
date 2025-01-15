import React from "react";

export default function HomeDisplay() {
  return (
    <section style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }} className="h-[50vh] justify-center content-center">
      <div className="flex flex-col gap-[80px] text-center font-black ">
        <h1 className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Discover Your New Home
        </h1>
        <h3 className="text-white sm:text-3xl md:text-3xl lg:text-4xl font-extrabold">
          Helping 100 million renters find their perfect fit.
        </h3>
      </div>
    </section>
  );
}

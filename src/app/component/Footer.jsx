import React from "react";
import FooterDetails from "./FooterDetails";
import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif' }} className="border bg-black border-black ">
       <div className="">
       <FooterDetails/>
      </div>
      <p className="text-center text-white p-7">Copyright &copy; {new Date().getFullYear()} A-Group&copy; | Developed by <Link href={'mailto:info@brawmart.com'} className="hover:text-gray-800">Omotayo</Link></p>
    </footer>
  );
}

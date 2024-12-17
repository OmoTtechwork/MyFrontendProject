import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillBuildingsFill } from "react-icons/bs";

export default function RealEstateConcept() {
  return (
    <div className='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
'>
        <section className="gap-[290px]">
            <div className="items-center justify-center content-center h-1/4 flex flex-col pt-[50px] bg-[#F5F5F5]">
                <Link href="./Cart"><BsFillBuildingsFill size={60} /></Link>
                <h2 className="font-bold pt-4 text-2xl">A-Group in Real-Estate</h2>
                <p className="py-2">Discover exceptional properties and investment opportunities with our trusted real estate solutions.</p>
            </div>
            <div className="w-4/4 flex flex-row px-14">
                <Image className="rounded-tl-[20px] rounded-bl-[20px]" src="/construction.webp" loading="lazy" width={260} height={250} alt="Construction Site" />

            <div className="flex flex-col px-8 bg-slate-400 rounded-tr-[20px] rounded-br-[20px]">
                <h2 className="py-10 text-3xl font-bold">Concept in Real estate</h2>
                <p className="w-[100%]">Discover the finest properties and investment opportunities in real estate. Our team of professionals is dedicated to providing tailored solutions to buyers, sellers, and investors alike. Whether you&apos;re looking for your dream home, an affordable apartment, or a commercial property to expand your business, we have you covered. With years of industry experience, we specialize in connecting clients to properties that meet their needs and expectations. Our mission is to make the process of buying, selling, or investing smooth and successful. Explore our curated portfolio of premium homes, innovative property ideas, and expert market insights. Let us help you secure the future you deserve.</p>
            <div className="flex py-14">
                <Link href="/Cart"><button className="font-bold text-2xl">Start Your Search</button></Link>
            </div>
            </div>
        </div >
    </section>
      
    </div>
  )
}

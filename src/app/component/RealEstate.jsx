import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsFillBuildingsFill } from "react-icons/bs";

export default function RealEstateConcept() {
  return (
    <div>
        <section className="gap-[290px]  ">
            <div className="items-center justify-center content-center h-1/4 flex flex-col pt-[50px] bg-[#F5F5F5]">
                <Link href="./Cart"><BsFillBuildingsFill size={60} /></Link>
                <h2 className="font-bold pt-4">A-Group in Real-Estate</h2>
                <p className="py-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime, esse?</p>
            </div>
            <div className="w-4/4 flex flex-row px-14">
                <Image className="rounded-tl-[20px] rounded-bl-[20px]" src="/construction.webp" width={'260'} height={'250'} alt=""/>

            <div className="flex flex-col px-8 bg-slate-400 rounded-tr-[20px] rounded-br-[20px]">
                <h2 className="py-10 text-3xl font-bold">Concept in Real estate</h2>
            <p className="w-5/6">Deciding to become a homeowner is a big deal! Luckily, with Homes.com, you get the most accurate homes for sale property data, an agent directory, and collaboration tools to browse with your agent and co-shopper to help you make the right decision.</p>
            <div className="flex py-14">
                <Link href='/Cart'><button className="font-bold">Start Your Search</button></Link>
            </div>
            </div>
        </div >
    </section>
      
    </div>
  )
}

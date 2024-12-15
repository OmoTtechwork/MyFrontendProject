import React from 'react'

export default function Support() {
  return (
    <div>
      <section className="py-20 px-20">
        <h2 className="text-4xl font-bold"><span className="special">Contact</span> Us</h2>
        <p className="text-lg mt-5">Please fill out the form below</p>

        <form className="flex flex-col gap-10 mt-10">
            <div className="w-[90%] flex flex-col gap-2">
                <label htmlFor ="name">Name:</label>
                <input type="text" name="" id="name" className="border border-[#ccc] w-full px-4 py-2 rounded"/>
            </div>

            <div className="w-[90%] flex flex-col gap-2">
                <label htmlFor ="name">Email:</label>
                <input type="email" name="" id="email" className="border  border-[#ccc] w-full px-4 py-2 rounded"/>
            </div>

            <div className="w-[90%] flex flex-col gap-2">
                <label htmlFor ="message">Message:</label>
                <textarea name="" id="message" className="border border-[#ccc] h-52 rounded"></textarea>
            </div>

            <button type="submit" className="border w-fit py-2 px-4 text-center bg-[#333] text-white rounded cursor-pointer rounded-[10px]"> Submit </button>
        </form>
    </section>
    </div>
  )
}

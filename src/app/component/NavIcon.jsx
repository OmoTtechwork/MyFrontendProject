import Link from "next/link";
import React from "react";
import { HiShoppingCart } from "react-icons/hi";
import { CgProfile } from "react-icons/cg";
import { BiSupport } from "react-icons/bi";

export default function IconNav() {
  return (
    <div className='font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;'>
      <section className="flex flex-row p-[70px]">
        <div className="text-center p-10 flex flex-col">
          <h2 className="text-3xl font-bold">Profile</h2>
          <p>
            <Link href="/About" className="flex justify-center p-4">
              <CgProfile size={50} />
            </Link>
          </p>
          <p className="text-lg leading-relaxed">
            Explore and manage your personal profile effortlessly. Keep your
            information updated, track your activity, and make the most of your
            personalized experience on our platform.
          </p>
        </div>

        <div className="text-center p-10">
          <h2 className="text-3xl font-bold">Cart</h2>
          <p>
            <Link href="/Cart" className="flex justify-center p-4">
              <HiShoppingCart size={50} />
            </Link>
          </p>
          <p className="text-lg leading-relaxed">
            Your cart holds the items you’ve selected for purchase. Review,
            adjust, or proceed to checkout easily. Start shopping now and take
            advantage of our latest deals!
          </p>
        </div>

        <div className="text-center p-10">
          <h2 className="text-3xl font-bold">Support</h2>
          <p>
            <Link href="./support" className="flex justify-center p-4">
              <BiSupport size={50} />
            </Link>
          </p>
          <p className="text-lg leading-relaxed">
            Need assistance? Our support team is here to help. Reach out with
            questions, technical issues, or feedback. We ensure your experience
            is smooth and satisfactory.
          </p>
        </div>
      </section>
    </div>
  );
}

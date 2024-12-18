import Link from "next/link";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function FooterDetails() {
  return (
    <div
      className="grid lg:grid-cols-[3fr_1fr_1fr_2fr] gap-x-5 lg:text-[26px] md:text-base sm:text-xs px-8 py-10 border bg-black border-black"
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      }}
    >
      <div className="text-white text-[24px] leading-9 px-4 lg:text-2xl md:text-base sm:text-xs">
        <h2 className="lg:text-2xl md:text-base sm:text-xs  capitalize py-4">
          A-Group, LLC
        </h2>
        <p>
          Empowering property owners and renters with modern solutions. At
          A-Group, we combine innovation and dedication to make real estate
          simple and accessible. Your trusted partner in finding a home or
          managing your properties.
        </p>
        <ul className="flex items-center space-x-4 py-4">
          <li className="rounded-full border-2 border-gray-400 p-4 hover:border-white hover:bg-gray-700 transition-all">
            <FaFacebookSquare />
          </li>
          <li className="rounded-full border-2 border-gray-400 p-4 hover:border-white hover:bg-gray-700 transition-all">
            <FaInstagramSquare />
          </li>
          <li className="rounded-full border-2 border-gray-400 p-4 hover:border-white hover:bg-gray-700 transition-all">
            <FaXTwitter />
          </li>
          <li className="rounded-full border-2 border-gray-400 p-4 hover:border-white hover:bg-gray-700 transition-all">
            <MdEmail />
          </li>
        </ul>
      </div>

      <div className="text-white">
        <h2 className="lg:text-2xl md:text-base sm:text-xs text-white capitalize py-4">
          useful links
        </h2>
        <ul className="capitalize lg:text-lg md:text-base sm:text-xs">
          <li>
            <Link href="/about">about</Link>
          </li>
          <li>
            <Link href="/contact">contact</Link>
          </li>
          <li>
            <Link href="/shop">shop</Link>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="lg:text-2xl text-white capitalize py-4">quick links</h2>
        <ul className="capitalize text-white lg:text-lg md:text-base sm:text-xs">
          <li>
            <Link href="">
              <abbr title="Frequently Asked questions">FAQs</abbr>
            </Link>
          </li>
          <li>
            <Link href="/log-in">log-in</Link>
          </li>
          <li>
            <Link href="/license">licensing</Link>
          </li>
        </ul>
      </div>
      <div className="text-white">
        <h2 className="lg:text-2xl md:text-base sm:text-xs text-white capitalize py-4">
          contact details
        </h2>
        <address>
          House 24, Adebayo Street, Lekki Phase 1, Lagos State, Nigeria.
        </address>
        <aside className="text-white">
          <h3 className="text-2xl text-white capitalize py-4">
            contact addresses
          </h3>
          <p>
            <Link href="tel:+234812345678">+234812345678</Link>
          </p>
          <p>
            <Link href="mailto:alogbaomotayo1426@gmail.com">A Group, LLC</Link>
          </p>
        </aside>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to toggle the menu state
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-black border-none sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-[#45A29E] hover:text-black hover-border-none focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={toggleMenu}
            >
              {!isMenuOpen ? <TiThMenuOutline /> : <IoMdClose />}
            </button>
          </div>
          {/* Conditionally render the mobile menu based on the state */}
          {
            <div
              className={`h-screen fixed left-0 text-2xl top-16 flex w-full flex-col p-4 text-black transition-transform duration-500 ease-in-out bg-white z-10 sm:hidden ${
                !isMenuOpen ? "-translate-x-full" : "translate-x-0"
              }`}
            >
              <Link href={"/"} onClick={closeMenu}>
                <p className="rounded-md px-3 py-2 text-md font-medium text-slate-700">
                  Home
                </p>
              </Link>
              <hr />
              <Link href={"/services"} onClick={closeMenu}>
                <p className="rounded-md px-3 py-2 text-md font-medium text-slate-700">
                  Services
                </p>
              </Link>
              <hr />
              <Link href={"/contactUs"} onClick={closeMenu}>
                <p className="rounded-md px-3 py-2 text-md font-medium text-slate-700">
                  Contact Us
                </p>
              </Link>
              <hr />
            </div>
          }
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <Link href={"/"}>
                <Image
                  className="rounded-full"
                  src="https://images.wallpapersden.com/image/download/lio-messi-in-barcelona-paint-art_bmZrZ2eUmZqaraWkpJRnbmZnrWZraGc.jpg"
                  alt="Your Company"
                  width={64}
                  height={64}
                  style={{
                    filter: "drop-shadow(0px 0px 24px #a726a9a8)",
                  }}
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block text-[#1F2833] font-extrabold">
              <div className="flex space-x-4">
                <Link href={"/"} className="w-28 text-center">
                  <div className="rounded-3xl px-3 py-2 text-md font-bold bg-white hover:bg-[#45A29E] hover:text-white">
                    Home
                  </div>
                </Link>
                <Link href={"/services"} className="w-28 text-center">
                  <div className="rounded-3xl px-3 py-2 text-md font-bold bg-white hover:bg-[#45A29E] hover:text-white">
                    Services
                  </div>
                </Link>
                <Link href={"/contactUs"} className="w-28 text-center">
                  <div className="rounded-3xl px-3 py-2 text-md font-bold bg-white hover:bg-[#45A29E] hover:text-white">
                    Contact Us
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

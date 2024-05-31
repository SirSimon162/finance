"use client";
import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="w-full">
      <div className="mx-auto px-2 md:px-4 py-2 md:py-4 flex justify-between items-center">
        <a href="/" className="md:hidden flex items-center w-fit">
          <img src="/logo.svg" alt="logo" />
          <span className="ml-2 font-bold md:text-4xl text-xl">Fineasy</span>
        </a>
        <div className="hidden w-full md:flex justify-between items-center font-medium">
          <div className="gap-x-[40px] md:flex items-center">
            <a href="/" className="flex items-center w-fit">
              <img src="/logo.svg" alt="logo" />
              <span className="ml-2 font-bold md:text-4xl text-xl">
                Fineasy
              </span>
            </a>
            <div className="gap-x-[24px] text-[20px] md:flex items-center">
              <a to="/" className="">
                Home
              </a>
              <a href="#about" className="">
                About Us
              </a>
              <a href="#pricing" className="">
                Pricing
              </a>
              <a href="#features" className="">
                Features
              </a>
            </div>
          </div>
          <button className="bg-black text-white text-[18px] px-[46px] py-[16px]">
            Download
          </button>
        </div>
        <div className="md:hidden block">
          <Hamburger
            toggled={isMobileMenuOpen}
            toggle={setIsMobileMenuOpen}
            size={25}
            rounded
          />
        </div>
        <div
          className={`${
            isMobileMenuOpen ? "block" : "hidden"
          } md:hidden absolute top-[60px] left-0 right-0 bg-white z-30 h-screen flex flex-col items-center`}
        >
          <div className="flex flex-col items-center gap-y-9 pt-12 font-medium">
            <a to="/" className="">
              Home
            </a>
            <a href="#about" className="">
              About Us
            </a>
            <a href="#pricing" className="">
              Pricing
            </a>
            <a href="#features" className="">
              Features
            </a>
            <button className="bg-black text-white px-[20px] py-[12px]">
              Download
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
"use client";
import Image from "next/image";
import { MdArrowRightAlt } from "react-icons/md";
import { FaPlayCircle } from "react-icons/fa";

function Hero() {
  return (
    <div className="relative flex flex-col lg:flex-row justify-between items-start">
      <div className="absolute -top-20 left-0 sm:left-48 w-40 sm:w-72 h-20 sm:h-36 bg-red-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
      <div className="absolute top-0 left-0 sm:left-40 w-40 sm:w-72 h-20 sm:h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70"></div>
      <div className="flex flex-col gap-[24px] items-start justify-start w-lg">
        <p className="font-bold text-[64px] leading-[64px]">
          Make The Best Financial Decisions
        </p>
        <p className="font-medium text-[18px] leading-[28px]">
          Your copilot to navigate the exciting yet complex world of personal
          finance, empowering you to make informed decisions and achieve your
          financial goals, big or small.
        </p>
        <div className="flex flex-col md:flex-row gap-[40px] text-[18px]">
          <button className="bg-black text-white py-[16px] px-[23px] flex items-center justify-center gap-[8px]">
            <p>Get Started</p>
            <MdArrowRightAlt />
          </button>
          <button className="flex items-center justify-center gap-[8px]">
            <FaPlayCircle />
            <p>Watch Video</p>
          </button>
        </div>
        <div>
          <Image
            src="/HeroStrip.png"
            alt="Achievement Strip"
            width={500}
            height={500}
            className="-translate-y-5"
          />
        </div>
      </div>
      <div className="relative w-full flex items-center justify-center -translate-y-20">
        <Image
          src="/HeroImg.png"
          alt="Mockups"
          width={800}
          height={800}
          className="max-w-full"
        />
        <div className="absolute bottom-40 left-36 w-40 sm:w-72 h-20 sm:h-36 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-[100]"></div>
      </div>
    </div>
  );
}

export default Hero;

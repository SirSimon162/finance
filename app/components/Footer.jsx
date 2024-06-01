import Link from "next/link";
import { MdEmail, MdPhone } from "react-icons/md";

export default function Footer() {
  const navigation = [
    { category: "Links", items: ["Home", "About Us", "Blogs"] },
    {
      category: "Legal",
      items: ["Terms of Use", "Privacy Policy", "Disclaimer"],
    },
    { category: "Product", items: ["Pricing", "FAQ", "Support"] },
  ];
  return (
    <div className="relative w-full py-[40px]">
      <div className="w-full">
        <div className="flex flex-col md:flex-row justify-between w-full mx-auto gap-[20px] md:gap-[40px] my-[20px]">
          <div className="">
            <div>
              <Link
                href="/"
                className="flex items-center space-x-2 text-2xl font-medium"
              >
                <img
                  src="logo.svg"
                  alt="Logo"
                  width="40"
                  height="40"
                  className="w-10 rounded-md"
                />
                <span className="font-bold text-[32px]">Fineasy</span>
              </Link>
            </div>

            <div className="max-w-md mt-5 flex gap-2">
              <div className="text-red-600 text-[20px]">
                <MdEmail />
              </div>
              <a className="" href="mailto:help@fineasy.com">
                help@fineasy.com
              </a>
            </div>
            <div className="max-w-md mt-2 flex gap-2">
              <div className="text-red-600 text-[20px]">
                <MdPhone />
              </div>
              <p className="">7777-777-777</p>
            </div>
          </div>
          <div className="flex lg:w-[40%] flex-col lg:flex-row items-start justify-between">
            {navigation.map((nav, index) => (
              <div key={index}>
                <h3 className="font-bold text-[32px]">{nav.category}</h3>
                <div className="flex flex-col w-full">
                  {nav.items.map((item, itemIndex) => (
                    <a
                      key={itemIndex}
                      href={`#${item.replace(/\s+/g, "-")}`}
                      className="w-full text-[16px]"
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="">
            <h3 className="font-bold text-[32px]">Newsletter</h3>
            <p>Stay Updated!</p>
            <form className="flex items-center justify-center mt-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-2 mb-2 rounded-md outline-none"
              />
              <button
                type="submit"
                className="w-full px-2 py-2 text-white bg-black focus:outline-none"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="bg-black h-[0.5px] w-full max-w-md mx-auto mt-5 md:mt-16"></div>
        <p className="text-[14px] md:text-[16px] text-center pt-[16px] md:pt-[20px]">Copyright 2022 uifry.com all rights reserved</p>
      </div>
    </div>
  );
}

"use client";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    name: "John Doe",
    heading: "Excellent Financial Tool",
    content:
      "Fineasy has completely transformed the way I manage my finances. It's intuitive and easy to use. I can track my expenses, set budgets, and plan for my future with ease. The app provides detailed insights that help me make informed financial decisions. I highly recommend Fineasy to anyone looking to take control of their financial life.",
    image: "https://picsum.photos/200",
  },
  {
    name: "Jane Smith",
    heading: "Highly Recommend",
    content:
      "The benefits and features of Fineasy are unmatched. It has helped me save and invest more wisely. The app's user-friendly interface and comprehensive tools make it easy to stay on top of my finances. Fineasy has also provided me with valuable tips and strategies to improve my financial health. I have seen significant improvements in my savings and investment returns since I started using Fineasy.",
    image: "https://picsum.photos/200",
  },
  {
    name: "Sam Wilson",
    heading: "Outstanding Customer Service",
    content:
      "The support team at Fineasy is always ready to help with any issues or questions. Their prompt and professional service has made my experience with the app even better. I had a few queries when I first started using Fineasy, and their team was incredibly helpful and responsive. It's reassuring to know that I can rely on their support whenever I need it.",
    image: "https://picsum.photos/200",
  },
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(testimonials[0]);

  return (
    <>
      <div className="text-center mx-auto">
        <p className="mt-4 text-[14px] sm:text-[16px] text-red-600">
          TESTIMONIALS
        </p>
        <h2 className="text-[32px] font-bold text-gray-900 sm:text-[48px] leading-tight max-w-[500px] mx-auto">
          What Our Users Say About Us
        </h2>
      </div>
      <div className="flex flex-col md:flex-row items-center mb-10">
        <div className="relative w-full flex justify-center items-center mb-4 md:mb-0">
          <Image
            width={1000}
            height={1000}
            src="/Testimonial.png"
            alt="Testimonials"
            className="object-cover md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
          <div className="absolute w-20 sm:w-44 h-20 sm:h-44 bg-red-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10 -translate-y-8"></div>
          <div className="absolute w-20 sm:w-44 h-20 sm:h-44 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-10 translate-y-4"></div>
        </div>
        <div className="w-full">
          <h2 className="text-[22px] sm:text-[28px] font-bold mb-4">
            {currentTestimonial.heading}
          </h2>
          <p className="text-[16px] sm:text-[20px] mb-2">
            "{currentTestimonial.content}"
          </p>
          <p className="text-[16px] sm:text-[18px] mb-6 font-bold">
            - {currentTestimonial.name}
          </p>
          <div className="flex space-x-4">
            {testimonials.map((testimonial, index) => (
              <img
                key={index}
                src={testimonial.image}
                alt={testimonial.name}
                onClick={() => setCurrentTestimonial(testimonial)}
                className={`rounded-full h-12 w-12 object-cover cursor-pointer ${
                  currentTestimonial.name === testimonial.name
                    ? "opacity-100"
                    : "opacity-50"
                } hover:opacity-100 transition-opacity duration-300`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;

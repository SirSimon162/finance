import { CiCircleCheck } from "react-icons/ci";
import Image from "next/image";

const Pricing = () => {
  const plans = [
    {
      name: "Free",
      price: "$0",
      features: ["Feature 1", "Feature 2", "Feature 3"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta: "Explore",
    },
    {
      name: "Basic",
      price: "$19",
      features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta: "Explore",
    },
    {
      name: "Pro",
      price: "$49",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta: "Explore",
    },
    {
      name: "Enterprise",
      price: "$62",
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
      ],
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      cta: "Explore",
    },
  ];

  return (
    <div className="py-12 relative" id="pricing">
      <div className="absolute bottom-40 left-20 w-40 sm:w-72 h-20 sm:h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-[100]"></div>
      <div className="absolute top-40 right-0 w-40 sm:w-72 h-20 sm:h-36 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-70 -z-[100]"></div>
      <Image
        src="Star.svg"
        alt="star"
        width={300}
        height={300}
        className="absolute w-10 bottom-0 -left-20 sm:block hidden"
      />
      <Image
        src="Star.svg"
        alt="star"
        width={300}
        height={300}
        className="absolute w-10 top-0 right-20 sm:block hidden"
      />
      <div className="mx-auto">
        <div className="text-center">
          <p className="mt-4 text-[14px] sm:text-[16px] text-red-600">
            Choose the plan that suits your needs.
          </p>
          <h2 className="text-[32px] font-bold text-gray-900 sm:text-[48px]">
            Pricing Plans
          </h2>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className="flex flex-col justify-between bg-white p-6 rounded-lg shadow-md border-[1px] border-gray-200"
            >
              <div>
                <h3 className="text-[28px] font-bold text-gray-900">
                  {plan.name}
                </h3>
                <p className="mt-1 text-red-600 text-[32px]">{plan.price}</p>
                <p className="text-[14px] sm:text-[16px]">{plan.desc}</p>
                <ul className="mt-6 space-y-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <CiCircleCheck />
                      <p>{feature}</p>
                    </li>
                  ))}
                </ul>
              </div>
              <button className="mt-8 block w-full bg-red-600 text-white text-center font-semibold py-2 rounded-md hover:bg-red-700">
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;

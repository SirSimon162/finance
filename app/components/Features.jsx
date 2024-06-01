import Image from "next/image";
import { FaCreditCard, FaChartBar, FaMoneyBill } from "react-icons/fa";

const featuresData = [
  {
    heading: "Effortless Expense Tracking",
    desc: "Seamlessly categorize and track your spending, giving you a clear picture of where your money goes.",
    icon: FaCreditCard,
  },
  {
    heading: "Personalized Insights",
    desc: "Get bite-sized financial reports that highlight spending trends and areas for optimization.",
    icon: FaChartBar,
  },
  {
    heading: "Budgeting Made Easy",
    desc: "Set realistic goals and stay on track with intuitive budgeting tools that adapt to your lifestyle.",
    icon: FaMoneyBill,
  },
];

function Feature({ heading, desc, icon }) {
  return (
    <div className="flex flex-col items-start justify-start py-3 space-y-3">
      <div className="flex gap-4">
        <span className="text-3xl">{icon()}</span>
        <h3 className="text-xl font-bold">{heading}</h3>
      </div>
      <p>{desc}</p>
    </div>
  );
}

const Features = () => {
  return (
    <>
      <div className="w-full flex flex-col md:flex-row items-center justify-between mb-10">
        <div className="relative flex justify-center items-center mb-4 md:mb-0">
          <Image
            width={1000}
            height={1000}
            src="/FeaturesImg.png"
            alt="features"
            className="object-cover md:max-w-md lg:max-w-lg xl:max-w-xl"
          />
          <div className="absolute w-40 sm:w-72 h-20 sm:h-36 bg-red-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-20"></div>
          <div className="absolute w-40 sm:w-72 h-20 sm:h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-20 -translate-y-10"></div>
        </div>
        <div>
          <div className="text-start mx-auto mb-4">
            <p className="mt-4 text-[14px] sm:text-[16px] text-red-600">
              FEATURES
            </p>
            <h2 className="text-[32px] font-bold text-gray-900 sm:text-[48px] leading-tight max-w-[500px]">
              Finance Made Easy
            </h2>
          </div>
          <div className="mx-auto flex flex-wrap justify-center max-w-[500px]">
            {featuresData.map((feature) => (
              <Feature key={feature.heading} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;

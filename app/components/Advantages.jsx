import Image from "next/image";
import { MdNotifications, MdDashboardCustomize } from "react-icons/md";
const data = [
  {
    title: "Clever notifications",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
    imgSrc: "/AdvantageOne.png",
    reverse: false,
    icon: MdNotifications,
  },
  {
    title: "Fully customizable",
    description:
      "Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.",
    imgSrc: "/AdvantageTwo.png",
    reverse: true,
    icon: MdDashboardCustomize,
  },
];

const Advantages = () => {
  return (
    <div className="w-full">
      <div className="text-center mx-auto mb-4">
        <p className="mt-4 text-[14px] sm:text-[16px] text-red-600">
          ADVANTAGES
        </p>
        <h2 className="text-[32px] font-bold text-gray-900 sm:text-[48px] leading-tight">
          Why Choose Fineasy?
        </h2>
      </div>
      <div className="w-full">
        {data.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              item.reverse ? "lg:flex-row-reverse" : "lg:flex-row"
            } items-center justify-between`}
          >
            <div className="lg:w-1/2 lg:px-8">
              <div className="flex gap-2">
                <span className="text-3xl text-red-500">{item.icon()}</span>
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              </div>
              <p className="max-w-[500px]">{item.description}</p>
            </div>
            <div className="relative flex justify-center items-center mb-4 md:mb-0">
              <Image
                src={item.imgSrc}
                alt={item.subtitle}
                width={1000}
                height={1000}
                className="object-cover md:max-w-md lg:max-w-lg xl:max-w-xl"
              />
              <div className="absolute w-40 sm:w-72 h-20 sm:h-36 bg-red-600 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-20"></div>
              <div className="absolute w-40 sm:w-72 h-20 sm:h-36 bg-yellow-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 -z-20 -translate-y-10"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advantages;

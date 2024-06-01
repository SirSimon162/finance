import Image from "next/image";
function Download() {
  return (
    <div className="relative">
    <div className="absolute bottom-0 left-0 w-40 sm:w-72 h-20 sm:h-36 bg-red-600 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
    <div className="absolute top-0 right-0 w-40 sm:w-72 h-20 sm:h-36 bg-yellow-600 rounded-full mix-blend-multiply filter blur-xl opacity-80"></div>
    <div className="relative w-full bg-black text-white rounded-md my-6 md:my-12 py-5">
      <div className=" rounded-lg shadow-sm overflow-hidden flex flex-col md:flex-row md:items-center justify-between text-center md:text-left">
        <div className="flex flex-col space-y-2 p-4 md:space-y-0 ml-2 lg:ml-14">
          <h2 className="text-[32px] md:text-[48px] font-bold capitalize">
            Ready To Get Started?
          </h2>
          <p className="font-medium text-[16px] md:text-[18px]">
            Get Ready to dive into the world of finances with FinEasy!
          </p>
          <div className="relative py-2 flex flex-col items-center space-y-3 md:space-x-4 md:space-y-0 md:items-center md:flex-row">
            <DownloadButton
              platform="Google Play"
              icon={<Google size={25} />}
              />
            <DownloadButton platform="App Store" icon={<Apple size={25} />} />
          </div>
        </div>
        <div>
          <Image
            src="/DownloadMockups.png"
            alt="Mobile"
            height={800}
            width={800}
            className="w-full object-contain lg:h-[300px] xl:h-[400px]"
            />
        </div>
      </div>
    </div>
            </div>
  );
}

export default Download;

const DownloadButton = ({ platform, icon }) => (
  <button className="bg-slate-100 inline-flex py-3 px-5 rounded-lg items-center hover:bg-slate-200 focus:outline-none transition-all duration-100 ease-in w-[180px] cursor-not-allowed">
    {icon}
    <span className="ml-4 flex items-start flex-col leading-none">
      <span className="text-xs text-slate-800 mb-1">GET IT ON</span>
      <span className="font-medium text-slate-800">{platform}</span>
    </span>
  </button>
);

const Apple = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="black"
  >
    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />{" "}
    <path d="M11.182.008C11.148-.03 9.923.023 8.857 1.18c-1.066 1.156-.902 2.482-.878 2.516.024.034 1.52.087 2.475-1.258.955-1.345.762-2.391.728-2.43zm3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422.212-2.189 1.675-2.789 1.698-2.854.023-.065-.597-.79-1.254-1.157a3.692 3.692 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56.244.729.625 1.924 1.273 2.796.576.984 1.34 1.667 1.659 1.899.319.232 1.219.386 1.843.067.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758.347-.79.505-1.217.473-1.282z" />
  </svg>
);

const Google = ({ size = 24 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 30 30"
    fill="currentColor"
  >
    <path
      d="M23.75,16A7.7446,7.7446,0,0,1,8.7177,18.6259L4.2849,22.1721A13.244,13.244,0,0,0,29.25,16"
      fill="#00ac47"
    />
    <path
      d="M23.75,16a7.7387,7.7387,0,0,1-3.2516,6.2987l4.3824,3.5059A13.2042,13.2042,0,0,0,29.25,16"
      fill="#4285f4"
    />
    <path
      d="M8.25,16a7.698,7.698,0,0,1,.4677-2.6259L4.2849,9.8279a13.177,13.177,0,0,0,0,12.3442l4.4328-3.5462A7.698,7.698,0,0,1,8.25,16Z"
      fill="#ffba00"
    />
    <polygon
      fill="#2ab2db"
      points="8.718 13.374 8.718 13.374 8.718 13.374 8.718 13.374"
    />
    <path
      d="M16,8.25a7.699,7.699,0,0,1,4.558,1.4958l4.06-3.7893A13.2152,13.2152,0,0,0,4.2849,9.8279l4.4328,3.5462A7.756,7.756,0,0,1,16,8.25Z"
      fill="#ea4435"
    />
    <polygon
      fill="#2ab2db"
      points="8.718 18.626 8.718 18.626 8.718 18.626 8.718 18.626"
    />
    <path
      d="M29.25,15v1L27,19.5H16.5V14H28.25A1,1,0,0,1,29.25,15Z"
      fill="#4285f4"
    />
  </svg>
);

import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="pt-8 lg:pt-32 bg-[url('/images/herobg.png')] bg-center bg-cover w-full">
      <div className="px-4 sm:px-6 lg:px-8 relative text-center">
        <h1 className="mx-auto text-center font-manrope font-bold text-4xl text-gray-900 mb-5 md:text-5xl leading-[50px]">
          Turn Solo Moments into
          <span className="text-indigo-600"> Shared Adventures</span>
        </h1>
        <p className="max-w-sm mx-auto text-center text-base font-normal leading-7 text-gray-500 mb-9">
          Tired of being alone? Discover local events, meet real people, and
          expand your social circle in a safe, age-verified community.
        </p>
        <a
          href="javascript:;"
          className="w-full md:w-auto mb-14 inline-flex items-center justify-center py-3 px-7 text-base font-semibold text-center text-white rounded-full bg-indigo-600 shadow-xs hover:bg-indigo-700 transition-all duration-500"
        >
          Create an account
          <svg
            className="ml-2"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.5 15L11.0858 11.4142C11.7525 10.7475 12.0858 10.4142 12.0858 10C12.0858 9.58579 11.7525 9.25245 11.0858 8.58579L7.5 5"
              stroke="white"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
        <div className="flex justify-center">
          <img
            src="/images/app-preview.png"
            alt="Dashboard image"
            className="rounded-t-3xl h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

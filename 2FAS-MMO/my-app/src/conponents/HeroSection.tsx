import React from "react";

const HeroSection = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between md:px-16 lg:px-24 py-12 bg-white min-h-screen max-w-6xl mx-auto px-6">
      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl md:text-5xl font-bold text-black">
          MMLogin-Authenticator
        </h1>
        <p className="text-xl md:text-2xl mt-4 font-semibold text-black">
          Bảo vệ <span className="text-red-500">tài khoản của bạn</span> theo cách tối đa
        </p>
        <p className="text-gray-500 mt-4">Xác thực mạnh mẽ, bảo vệ toàn diện</p>

        <div className="flex items-center gap-6 mt-6">
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-2xl font-bold">4.7</span>
            <span className="text-yellow-400">★★★★★</span>
            <p className="text-gray-500 text-sm">Average rating</p>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-red-500 text-2xl font-bold">6+</span>
            <p className="text-gray-500 text-sm">Million Downloads</p>
          </div>
        </div>

        <div className="flex gap-4 mt-6">
          <img src="./appstore.png" alt="App Store" className="w-36 cursor-pointer" />
          <img src="./googleplay.png" alt="Google Play" className="w-36 cursor-pointer" />
        </div>
      </div>

      <div className="md:w-1/2 flex justify-center relative mt-12 md:mt-0">
        <img
          src="/phone.png"
          alt="Authenticator App"
          className="w-80 md:w-[400px] relative z-10"
        />

       {/* Hai vòng tròn xoay */}
        <div className="absolute w-[650px] h-[650px] flex items-center justify-center z-0">
        {/* Vòng tròn ngoài */}
        <div className="absolute w-[550px] h-[550px] border-2 border-gray-400 rounded-full"></div>

        {/* Vòng tròn trong */}
        <div className="absolute w-[350px] h-[350px] border-2 border-gray-600 rounded-full"></div>

        {/* Icon xoay quanh vòng tròn ngoài */}
        <div className="absolute w-[650px] h-[650px] animate-spin-slow">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-white text-2xl">
            <img src="./eye.png" className="w-12 h-12 object-contain" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-white text-2xl">
            <img src="./key.png" className="w-12 h-12 object-contain" />
            </div>
        </div>

        {/* Icon xoay quanh vòng tròn trong */}
        <div className="absolute w-[350px] h-[350px animate-spin-reverse">
            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 text-white text-2xl">
            <img src="./handid.png" className="w-12 h-12 object-contain" />
            </div>
            <div className="absolute right-0 top-1/2 transform -translate-y-1/2 text-white text-2xl">
            <img src="./face.png" className="w-12 h-12 object-contain" />
            </div>
        </div>
        </div>

        <div className="absolute top-16 left-4 bg-white shadow-lg rounded-2xl px-4 py-2 flex items-center gap-3 z-20">
        <img src="/epic.png" alt="Epic Games" className="w-8 h-8" />
        <div className="flex flex-col">
            <h2 className="text-sm font-medium text-gray-900">Epic Games</h2>
            <span className="text-2xl font-bold tracking-wider text-gray-900">462 775</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
            <span>(10)</span>
            <img src="/eye.png" className="w-4 h-4 ml-1" />
        </div>
        </div>

        <div className="absolute bottom-24 right-4 bg-white shadow-lg rounded-2xl px-4 py-2 flex items-center gap-3 z-20">
        <img src="/binance.png" alt="Binance" className="w-8 h-8" />
        <div className="flex flex-col">
            <h2 className="text-sm font-medium text-gray-900">Binance</h2>
            <span className="text-2xl font-bold tracking-wider text-gray-900">780 832</span>
        </div>
        <div className="flex items-center text-gray-500 text-sm">
            <span>(10)</span>
            <img src="/eye.png" className="w-4 h-4 ml-1" />
        </div>
        </div>


      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";

const Protection = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-purple-50 rounded-xl ">
    <section className="max-w-6xl mx-auto px-6 py-20 text-center">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
        Hãy cùng nhau bảo vệ <br /> tài khoản của bạn
      </h2>
      <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
        Cùng với cộng đồng tuyệt vời của chúng tôi, chúng tôi đặc biệt khuyến khích bạn hành động bằng cách
        bảo vệ các dịch vụ trực tuyến của bạn bằng ứng dụng MMOLogin Authentic và giúp chúng tôi tiếp tục
        sứ mệnh của mình bằng cách quyên góp và đóng góp cho dự án mã nguồn mở MMOLogin Authentic.
      </p>

      <div className="mt-10 max-w-2xl mx-auto space-y-6">
        {["Tải xuống và dùng thử ứng dụng MMOLogin Authentic trên Android hoặc iOS.",
          "Quyên góp cho dự án mã nguồn mở MMOLogin Authentic.",
          "Đóng góp trên Github và Discord."].map((text, index) => (
          <div key={index} className="flex items-center space-x-4">
            <div className="w-10 h-10 flex items-center justify-center border-2 border-red-500 text-red-500 font-bold text-lg rounded-full">
              {index + 1}
            </div>
            <p className="text-gray-700 text-left">
              {text.split(/(MMOLogin Authentic|Android|iOS|Github|Discord)/g).map((part, i) =>
                ["MMOLogin Authentic", "Android", "iOS", "Github", "Discord"].includes(part) ? (
                  <span key={i} className="text-red-500 font-semibold">{part}</span>
                ) : (
                  part
                )
              )}
            </p>
          </div>
        ))}
      </div>
    </section>
    </div>
  );
};

export default Protection;

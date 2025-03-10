import React from "react";

const Section = () => {
  return (
    <div className="w-full bg-gradient-to-b from-white to-purple-50 ">
    <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-20 w-full max-w-6xl mx-auto text-center bg-gradient-to-b from-white to-purple-50 rounded-xl ">
      <div className="md:w-1/2 text-center md:text-left max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Tại sao bạn cần <br />
          <span className="text-blue-600">MMOLogin Authenticator?</span>
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Mật khẩu có thể bị đánh cắp, nhưng với MMOLogin Authenticator, tài khoản của bạn được bảo vệ nhiều lớp.
        </p>
        <ul className="mt-4 space-y-3 text-gray-600 text-lg">
          <li> Ngăn chặn các hành vi xâm nhập, đánh cắp thông tin cá nhân và tài sản.</li>
          <li> An tâm hơn khi sử dụng các dịch vụ của hệ sinh thái MMOLogin.</li>
        </ul>
      </div>

      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <img src="/background1.png" alt="MMOLogin Illustration" className="w-full max-w-md object-contain" />
      </div>
    </section>
    </div>
  );
};

export default Section;

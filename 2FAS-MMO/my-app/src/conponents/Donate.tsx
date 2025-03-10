import React from "react";

const Donate = () => {
  return (
    <div className="w-full bg-gradient-to-r from-white to-purple-100">
    <section className="flex flex-col md:flex-row items-center justify-between md:px-16 lg:px-24  max-w-6xl mx-auto px-6 py-20 text-center rounded-xl">

      <div className="md:w-1/2 text-left  max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          MMOLogin Authentic <br />
          là ứng dụng có mã <br />
          nguồn mở và sẽ luôn <br />
          <span className="text-red-600">là miễn phí</span>
        </h2>
        <p className="text-gray-700 mt-4 text-lg">
          Nhưng bạn vẫn có thể quyên góp cho dự án MMOLogin 
          Authentic để hỗ trợ công việc của chúng tôi.
        </p>
        <button className="mt-6 px-6 py-3 bg-red-600 text-white font-semibold rounded-full flex items-center gap-2 hover:bg-red-700 transition">
          DONATE TO PROJECT ❤️
        </button>
      </div>

      <div className="md:w-1/2 flex justify-center mt-12 md:mt-0">
        <img src="/donate.png" alt="Donate Illustration" className="w-full max-w-md" />
      </div>
    </section>
    </div>
  );
};

export default Donate;

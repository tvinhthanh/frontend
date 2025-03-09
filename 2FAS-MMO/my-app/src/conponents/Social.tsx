import React from "react";

const Social = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-white to-pink-100">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl px-6">
        <div className="flex justify-center">
          <img
            src="/social.png"
            alt="Social Media Icons"
            className="w-full max-w-md"
          />
        </div>

        <div className="text-left">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Đừng chờ đợi!!!
            <br />Hãy bảo vệ tài khoản và dữ liệu công việc ngay nào!
          </h2>
          <p className="text-gray-600 mb-4">
            Nếu bạn sử dụng tài khoản trực tuyến cho phương tiện truyền thông xã hội,
            ngân hàng hoặc email - thì bạn luôn gặp rủi ro về việc danh tính của bạn
            bị đánh cắp hoặc tài khoản bị hack. Tin tốt là bạn có thể bảo vệ truy cập vào
            tài khoản của bạn bằng hai yếu tố xác thực giữ tài khoản của bạn dưới sự
            kiểm soát của bạn.
          </p>
          <p className="text-gray-600 mb-4">
            Để bắt đầu, chỉ cần tải xuống MMLogin - Authenticator ứng dụng và kết nối tài
            khoản của bạn theo cách đơn giản qua video hướng dẫn mà chúng tôi cung cấp.
          </p>
          <button className="bg-red-500 text-white py-2 px-4 rounded-2xl shadow-md hover:bg-red-600">
            SEE HOW IT WORKS
          </button>
        </div>
      </div>
    </section>
  );
};

export default Social;
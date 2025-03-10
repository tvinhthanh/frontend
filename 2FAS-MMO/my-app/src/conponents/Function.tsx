import React from "react";

const FunctionSection = () => {
  return (
    <section className="py-16 bg-pink-50">
    <div className="bg-pink-50 min-h-screen py-16 max-w-6xl mx-auto px-6">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-left leading-tight">
              Nâng cao bảo mật cho tài khoản mmologin với <br /> Xác thực Đa yếu tố
            </h2>
            <div className="bg-white p-6 mt-4 rounded-2xl shadow-lg">
            <img src="/account.png" alt="Quản lý tài khoản" className="w-2/3 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-gray-900 text-center">Quản lý tài khoản tập trung</h2>
            <ul className="text-gray-600 mt-3 space-y-4">
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span>Quản lý tất cả tài khoản mmologin của bạn trong <strong>một ứng dụng</strong> duy nhất.</span>
                </li>
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span><strong>Thao tác dễ dàng</strong> thêm, xóa, và theo dõi các tài khoản.</span>
                </li>
            </ul>
            </div>

            <div className="bg-white p-6 mt-4 rounded-2xl shadow-lg">
            <img src="/security.png" alt="Bảo mật tối đa" className="w-2/3 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-gray-900 text-center">Bảo mật tối đa</h2>
            <ul className="text-gray-600 mt-3 space-y-4">
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span>Dữ liệu được <strong>mã hóa và bảo vệ</strong> an toàn trên thiết bị của bạn.</span>
                </li>
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span>Ứng dụng <strong>không yêu cầu quyền truy cập</strong> vào các thông tin nhạy cảm.</span>
                </li>
            </ul>
            </div>

          </div>

          <div>
            <div className="bg-white p-6 rounded-2xl shadow-lg">
            <img src="/MFA.png" alt="Xác thực đa yếu tố" className="w-2/3 mx-auto mb-4" />
            <h2 className="text-2xl font-extrabold text-gray-900 text-center">Xác thực đa yếu tố (MFA)</h2>
            <ul className="text-gray-600 mt-4 space-y-4">
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span><strong>Mã OTP</strong> Mã số ngẫu nhiên, thay đổi liên tục, chỉ có hiệu lực trong thời gian ngắn.</span>
                </li>
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span>Sinh trắc học <strong>Vân tay, khuôn mặt (Face ID)</strong> xác thực nhanh chóng và an toàn.</span>
                </li>
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span><strong>Xác thực vị trí</strong> Phát hiện các đăng nhập từ vị trí bất thường.</span>
                </li>
                <li className="flex items-start gap-2">
                <span className="text-red-500 text-lg">●</span>
                <span><strong>Thiết bị tin cậy</strong> Cho phép đăng nhập nhanh chóng trên các thiết bị đã được xác thực.</span>
                </li>
            </ul>
            </div>

            
            <div className="bg-white p-6 rounded-2xl shadow-lg mt-6">
            <img src="/security.png" alt="Bảo mật tối đa" className="w-2/3 mx-auto mb-4" />

            <h2 className="text-2xl font-extrabold text-gray-900 text-center">Giao diện thân thiện</h2>
                <ul className="text-gray-600 mt-3 space-y-4">
                    <li className="flex items-start gap-2">
                    <span className="text-red-500 text-lg">●</span>
                    <span><strong>Thiết kế đơn giản</strong>, dễ sử dụng, phù hợp với mọi lứa tuổi.</span>
                    </li>
                    <li className="flex items-start gap-2">
                    <span className="text-red-500 text-lg">●</span>
                    <span>Các thao tác <strong>trực quan, dễ dàng</strong> làm quen và cài đặt.</span>
                    </li>
                </ul>
            </div>

               </div>
             </div>        
            </div>

            <div className="text-center text-gray-700 mt-8">
                <p>Nếu bạn muốn tìm hiểu thêm về <span className="text-red-500">MMOlogin Authentic</span> và các ứng dụng phổ biến khác, hãy xem phần so<br/> sánh <span className="text-red-500">MMOlogin Authentic</span> với <span className="text-red-500">Microsoft Authenticator</span>, <span className="text-red-500">Google Auth</span>, <span className="text-red-500">Duo</span>, <span className="text-red-500">2fas</span> và <span className="text-red-500">Authy</span>.</p>
            </div>
        </div>
     </section>

  );
};

export default FunctionSection;

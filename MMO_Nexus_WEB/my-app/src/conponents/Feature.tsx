import { FaShieldAlt, FaGlobe, FaUsers, FaHeart, FaMagic, FaDollarSign } from "react-icons/fa";

const features = [
  {
    image: "/feature1.png", 
    title: "Digital Credibility",
    description: "An tâm giao dịch trực tuyến với hệ thống xác thực danh tính đa chiều và bảo hiểm giao dịch."
  },
  {
    image: "/feature2.png", 
    title: "KiNi World",
    description: "Giải trí mỗi ngày với cơ chế 'Fun To Earn' độc đáo, nhận thưởng và giao dịch tài sản số dễ dàng."
  },
  {
    image: "/feature3.png", 
    title: "Playou Together",
    description: "Kết nối bạn bè, tham gia bang hội, khám phá thế giới ảo và trải nghiệm các trò chơi dân gian."
  },
  {
    image: "/feature4.png", 
    title: "Univer Beauty",
    description: "Tôn vinh vẻ đẹp toàn diện, kết hợp chăm sóc sức khỏe bên trong và vẻ ngoài cuốn hút."
  },
  {
    image: "/feature5.png", 
    title: "Wibu Mirage",
    description: "Đắm mình trong không gian giải trí đa phương tiện với cảm hứng từ văn hóa Wibu."
  },
  {
    image: "/feature6.png", 
    title: "MMOLogin Solutions",
    description: "Khai thác cơ hội kiếm tiền trực tuyến trên đa nền tảng với các dịch vụ."
  }
];

const FeatureSection = () => {
  return (
    <div className="bg-gradient-to-b from-purple-100 to-blue-100 text-center py-20 px-44">
      <h2 className="text-3xl font-bold text-gray-900">The Power Of Combination</h2>
      <p className="mt-2 text-gray-600">MMOLogin Nexus là ngôi nhà chung của những dự án tiềm năng, cùng nhau tạo nên một hệ sinh thái vững mạnh.</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
        {features.map((feature, index) => (
          <div key={index} className="flex items-start space-x-4">
            <div className="text-left">
            <img src={feature.image} alt={feature.title} className="w-20 h-20" />
              <h3 className="text-base font-semibold text-gray-800">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureSection;

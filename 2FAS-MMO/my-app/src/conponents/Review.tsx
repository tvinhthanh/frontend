import React from "react";
import { FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { SiGoogleplay, SiAppstore } from "react-icons/si";

const reviews = [
  {
    rating: "4.7",
    platform: "App Store",
    reviews: "Over 50k reviews worldwide",
    icon: <SiAppstore className="text-blue-500 text-4xl" />,
    link: "#",
  },
  {
    rating: "4.6",
    platform: "Google Play",
    reviews: "Over 30k reviews worldwide",
    icon: <SiGoogleplay className="text-green-500 text-4xl" />,
    link: "#",
  },
];

const Review = () => {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-white to-purple-100 ">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10 max-w-6xl mx-auto px-6">
        Tại sao mọi người yêu thích <br /> MMOLogin Authentic
      </h2>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-8 text-center w-80 border border-gray-200"
          >
            <div className="text-red-500 text-5xl font-bold">{review.rating}</div>
            <div className="flex justify-center my-2">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} className="text-red-500 text-xl" />
              ))}
            </div>
            <p className="text-gray-600 text-sm">{review.platform} avg. rating based on</p>
            <p className="text-gray-600 text-sm">{review.reviews}</p>
            <div className="flex justify-center mt-4">{review.icon}</div>
            <a
              href={review.link}
              className="text-red-500 font-semibold flex items-center justify-center mt-4"
            >
              READ REVIEWS <FaExternalLinkAlt className="ml-2 text-xs" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Review;

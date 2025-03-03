import { useState } from "react";
import { BiX } from "react-icons/bi";

interface AdProps {
  onClose: () => void;
}

const Ad: React.FC<AdProps> = ({ onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null; 

  return (
    <div className="fixed  bg-white shadow-lg rounded-lg overflow-hidden w-80 sm:w-96 border border-gray-300 z-50 animate-fadeIn">
      {/* Close Button */}
      <button
        className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 transition cursor-pointer"
        onClick={() => {
          setIsVisible(false);
          onClose(); // Notify parent component
        }}
      >
        <BiX size={22} />
      </button>

      {/* Ad Image */}
      <img
        src="https://images.unsplash.com/photo-1560769629-975ec94e6a86?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" // Replace with actual ad image
        alt="Ad Banner"
        className="w-full h-40 object-cover"
      />

      {/* Ad Content */}
      <div className="p-4 text-center">
        <h3 className="text-lg font-bold text-gray-800">
          Exclusive Deal Just for You!
        </h3>
        <p className="text-sm text-gray-600 mt-1">
          Get up to <span className="font-bold text-red-500">50% OFF</span> on
          all products. Hurry up!
        </p>

        {/* CTA Button */}
        <a
          href="#"
          className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
};

export default Ad;

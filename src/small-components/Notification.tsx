import { useState } from "react";
import { BiX } from "react-icons/bi";
import CountdownTimer from "./CounterTime";
import Ad from "./Ad";

const Notification = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  if (!isVisible) return null; // Hide notification when closed

  return (
    <>
      {/* Notification Bar */}
      <div className="relative w-full py-2 bg-h-background text-center flex justify-between px-20 xl:px-35 items-center transition-opacity duration-300 font-f-playwrite">
        <p className="text-xs text-white">
          FREE delivery & 40% Discount for next 3 orders! Place your 1st order
          in.
        </p>

        <div className="flex items-center justify-start gap-2">
          <CountdownTimer />
          <div className="flex gap-2">
            {/* Order Now Button - Opens Popup */}
            <button
              className="notification_tooltip bg-green-600 hover:bg-green-700 text-white px-4 py-1 rounded transition"
              onClick={() => setIsPopupOpen(true)}
            >
              Order Now
            </button>

            {/* Close Notification Button */}
            <button
              className="notification_tooltip active:bg-violet-400 active:duration-300 active:scale-95 active:rotate-180 font-bold"
              onClick={() => setIsVisible(false)}
            >
              <BiX />
            </button>
          </div>
        </div>
      </div>

      {/* Full-Screen Popup Modal */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
          <Ad onClose={() => setIsPopupOpen(false)} />
        </div>
      )}
    </>
  );
};

export default Notification;

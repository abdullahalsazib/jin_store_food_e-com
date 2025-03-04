import { GoDash } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";

const Header1_row = () => {
  return (
    <>
      <div className=" d-between xl:px-32 py-2 font-f-opensans border-b-[1px] border-h-stock ">
        <div className=" d-center gap-1 text-xs">
          <ul className=" flex flex-row items-center justify-center gap-3">
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">My Account</a>
            </li>
            <li>
              <a href="#">Wishlist</a>
            </li>
          </ul>
          <div>
            <GoDash className=" text-gray-400 text-2xl rotate-90" />
          </div>
          <p>
            We deliver to you every day from{" "}
            <span className=" text-red-600 font-bold">7:00 to 23:00</span>
          </p>
        </div>
        <div className=" d-center gap-3 text-sm">
          {/* Right-side content */}

          <Icons_btn icon={<IoIosArrowDown />} label="English" />
          <Icons_btn icon={<IoIosArrowDown />} label="USD" />
          <button>Order Tracking</button>
        </div>
      </div>
    </>
  );
};

export default Header1_row;

export const Icons_btn: React.FC<{
  icon?: React.ReactNode;
  label: string;
  onClick?: () => void;
}> = ({ icon, label, onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className=" flex items-center gap-1 cursor-pointer text-sm"
      >
        {label} {icon}
      </button>
    </>
  );
};

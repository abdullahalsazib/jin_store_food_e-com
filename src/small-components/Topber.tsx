import { BiUser } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { GoHeart } from "react-icons/go";
import { LuShoppingCart } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";

const Topber = () => {
  return (
    <>
      <div className="flex flex-row items-center justify-between px-20 xl:px-35 py-3 gap-10">
        <div className=" d-center gap-3 font-f-opensans">
          <img
            className=" w-full"
            src="./src/assets/logo.png"
            alt="logo image"
          />
          <Icons_btn icon={<SlLocationPin />} />
          <div className=" text-sm w-full px-2">
            <p>
              Deliver to <br /> <span className=" font-bold">All</span>
            </p>
          </div>
        </div>
        <div className=" relative w-[60%]">
          <input
            className=" font-f-playwrite w-full border-[1px] border-h-stock outline-none py-2 px-5 rounded-[10px] placeholder:text-gray-400 bg-input-background"    
            type="text"
            placeholder="Search for products, categories or brands..."
          />
          <div className=" text-2xl absolute right-4 text-gray-400 top-2">
            <FiSearch />
          </div>
        </div>
        <div className=" d-center gap-3 ">
          <Icons_btn icon={<BiUser />} />
          <div className="flex flex-col text-sm font-f-opensans -space-y-1">
            <p>Sign in</p>
            <p className=" font-bold">Account</p>
          </div>
          <Icons_btn icon={<GoHeart />} />
          <Icons_btn icon={<LuShoppingCart />} />
        </div>
      </div>
    </>
  );
};

export default Topber;

const Icons_btn: React.FC<{ icon: React.ReactNode; label?: string }> = ({
  icon,
  label,
}) => {
  return (
    <button className=" d-center gap-1 text-3xl cursor-pointer">
      <div>{icon}</div>
      <p>{label}</p>
    </button>
  );
};

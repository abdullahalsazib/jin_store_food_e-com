import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Icons_btn } from "./Header1_row";

const Header2_row: React.FC<{
  className?: string;
}> = ({ className }) => {
  return (
    <>
      <div
        className={` d-between  py-3 font-f-opensans border-b-[1px] border-t-[1px] border-h-stock ${className}`}
      >
        <ul className=" flex flex-row items-center justify-center gap-3 text-sm font-semibold">
          <li>
            <a href="#">
              <Icons_btn icon={<IoIosArrowDown />} label="Home" />
            </a>
          </li>
          <li>
            <a href="#">
              <Icons_btn icon={<IoIosArrowDown />} label="Shop" />
            </a>
          </li>
          <li>
            <a href="#">Fruits & Vegetables</a>
          </li>
          <li>
            <a href="#">Beverages</a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul className=" flex flex-row items-center justify-center gap-3 font-semibold text-sm">
          <li>
            <Icons_btn icon={<IoIosArrowDown />} label="Trending Products" />
          </li>
          <li>
            <a
              href="#"
              className="text-sm flex items-center justify-center gap-1"
            >
              {" "}
              <p className=" text-a-red">Almost Finished</p>
              <span className=" uppercase text-white text-[9px] font-semibold rounded-md  py-1 px-2 bg-a-red">
                sale
              </span>{" "}
              <IoIosArrowDown />{" "}
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header2_row;

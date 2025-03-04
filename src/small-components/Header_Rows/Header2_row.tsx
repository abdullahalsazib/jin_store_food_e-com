import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { Icons_btn } from "./Header1_row";

const Header2_row = () => {
  return (
    <>
      <div className=" d-between xl:px-32 py-2 font-f-opensans border-b-[1px] border-t-[1px] border-h-stock ">
        <ul className=" flex flex-row items-center justify-center gap-3">
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
        <ul className=" flex flex-row items-center justify-center gap-3">
          <li>
            <Icons_btn icon={<IoIosArrowDown />} label="Trending Products" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header2_row;

import { MdDashboard } from "react-icons/md";
import Header2_row from "../../../small-components/Header_Rows/Header2_row";

import {
  FaAppleAlt,
  FaDrumstickBite,
  FaEgg,
  FaBreadSlice,
  FaCoffee,
  FaSnowflake,
  FaCookie,
  FaLeaf,
  FaBroom,
  FaToiletPaper,
  FaBaby,
} from "react-icons/fa";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";

const categories = [
  {
    name: "Fruits & Vegetables",
    icon: FaAppleAlt,
    route: "/fruits-vegetables",
  },
  { name: "Meats & Seafood", icon: FaDrumstickBite, route: "/meats-seafood" },
  { name: "Breakfast & Dairy", icon: FaEgg, route: "/breakfast-dairy" },
  { name: "Breads & Bakery", icon: FaBreadSlice, route: "/breads-bakery" },
  { name: "Beverages", icon: FaCoffee, route: "/beverages" },
  { name: "Frozen Foods", icon: FaSnowflake, route: "/frozen-foods" },
  { name: "Biscuits & Snacks", icon: FaCookie, route: "/biscuits-snacks" },
  { name: "Grocery & Staples", icon: FaLeaf, route: "/grocery-staples" },
  { name: "Household Needs", icon: FaBroom, route: "/household-needs" },
  { name: "Healthcare", icon: FaToiletPaper, route: "/healthcare" },
  { name: "Baby & Pregnancy", icon: FaBaby, route: "/baby-pregnancy" },
];

const Home = () => {
  return (
    <>
      <div className=" h-full xl:px-32 w-full flex items-start justify-center py-5">
        <div className=" w-[25%] bg-yellow-700">
          <div>
            {/* jack */}
            <div className="w-full bg-white border-2 border-h-stock  p-4">
              <h2 className="text-lg font-bold mb-4 flex items-center gap-2">
                <span className="text-xl">
                  <MdDashboard />
                </span>{" "}
                All Categories
              </h2>
              <ul>
                {categories.map((category, index) => (
                  <li
                    key={index}
                    className="flex hover:border-2 duration-200 border-h-stock items-center gap-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer"
                  >
                    <category.icon className="text-xl" />
                    <span className="text-sm font-medium">{category.name}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* jack */}
          </div>
        </div>
        <div className=" w-[70%] ">
          <Header2_row className="px-10" />
          <div className=" w-full h-full flex flex-col items-center justify-center">
            <div className=" w-full">
              <div className=" w-full relative">
                <img
                  className=" w-full p-1"
                  src="./src/assets/home_image/div.slick-list.png"
                  alt=""
                />
                <div className=" w-full flex flex-row justify-center items-center relative">
                  <div className=" flex flex-row justify-between items-center px-4 py-2 absolute bottom-3  text-2xl bg-text-white rounded-full gap-10">
                    <button className=" cursor-pointer hover:text-h-stock active:scale-110 active:text-text-primary duration-200">
                      {" "}
                      <BiLeftArrow />{" "}
                    </button>
                    <button className=" cursor-pointer hover:text-h-stock active:scale-110 active:text-text-primary duration-200">
                      {" "}
                      <BiRightArrow />{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* tistymonial */}
      <div className="xl:px-32 w-full py-5 border-b-2 border-h-stock">
        <BoxOfTistemoinal />
      </div>
    </>
  );
};

export default Home;

const D_BoxOfTistemoinal = [
  {
    name: "Payment only online",
    desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    img: "./src/assets/tastemoinal/t1.svg",
  },
  {
    name: "New stocks and sales",
    desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    img: "./src/assets/tastemoinal/t2.svg",
  },
  {
    name: "Quality assurance",
    desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    img: "./src/assets/tastemoinal/t3.svg",
  },
  {
    name: "Delivery from 1 hour",
    desc: "Tasigförsamhet beteendedesign. Mobile checkout. Ylig kärrtorpa.",
    img: "./src/assets/tastemoinal/t4.svg",
  },
];
const BoxOfTistemoinal = () => {
  return (
    <>
      <div className=" w-full  flex items-center justify-center gap-10">
        {D_BoxOfTistemoinal.map((item, index) => (
          <div
            key={index}
            className="w-full flex flex-row items-center gap-5 font-bold text-black py-5"
          >
            <img className="w-24" src={item.img} alt="" />
            <div>
              <h1 className="font-bold font-f-playwrite  text-text-gray-black text-2xl">
                {item.name}
              </h1>
              <p className=" text-sm font-normal ">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

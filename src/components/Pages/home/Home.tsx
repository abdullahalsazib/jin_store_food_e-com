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
          <div className=" w-full h-full bg-red-500">
            <h1>hello</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

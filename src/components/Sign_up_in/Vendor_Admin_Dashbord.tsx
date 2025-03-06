import React from "react";
import { BiGitCompare, BiUserMinus } from "react-icons/bi";
import { LabelInput, RememberMe } from "./Sign";

const Vendor_Admin_Dashboard = () => {
  // Sidebar Data
  const sidebarData = [
    { title: "Dashboard", icon: null },
    { title: "Order", icon: null },
    { title: "Downloads", icon: null },
    { title: "Account details", icon: null },
    { title: "Wishlist", icon: null },
    { title: "Compare", icon: <BiGitCompare className=" text-2xl" /> },
    { title: "Address", icon: null },
  ];

  return (
    <div className="w-full mt-2 flex flex-col items-start gap-4">
      {/* Profile Section */}
      <div className="flex items-center gap-2 py-3">
        <div className="w-12 h-12 flex items-center justify-center rounded-full text-white bg-slate-800">
          <BiUserMinus className="p-1 text-4xl" />
        </div>

        <div className="font-f-opensans">
          <p className="text-sm font-f-playwrite text-slate-400">
            Welcome back,
          </p>
          <h1 className="font-bold">name@gmail.com</h1>
        </div>
      </div>

      <div className=" w-full flex flex-row gap-4">
        {/* Sidebar Navigation */}
        <nav className=" w-[20%]">
          <ul className="flex flex-col items-start">
            {sidebarData.map((item, index) => (
              <SidebarNav key={index} title={item.title} icon={item.icon} />
            ))}
          </ul>
        </nav>
        <div className="w-[80%]">
          {/* Content */}
          <div className="w-full h-full bg-white px-5 rounded-lg">
            <h1 className="text-xl font-bold">Update account to Vendor</h1>
            <form className="flex items-start justify-center flex-col gap-2 py-3 text-2xl!">
              <LabelInput
                label="First Name"
                type="text"
                placeholder="Enter your first name"
                isImportant
              />
              <LabelInput
                label="Last Name"
                type="text"
                placeholder="Enter your last name"
                isImportant
              />
              <LabelInput
                label="Shop Name"
                type="text"
                placeholder="Enter your shop name"
                isImportant
              />
              <LabelInput
                label="Phone Number"
                type="text"
                placeholder=""
                isImportant
              />
              <RememberMe isImportant>
                <p className="font-f-playwrite cursor-pointer">
                  I have read and agree to the{" "}
                  <span className=" text-text-primary">Terms & Conditions</span>
                  .
                </p>
              </RememberMe>
              <button className=" py-2 px-4  cursor-pointer text-slate-600 font-f-opensans hover:text-slate-800 duration-200 active:scale-105 text-sm border-2 border-h-stock">
                Become a Vendor
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendor_Admin_Dashboard;

// Sidebar Navigation Component
const SidebarNav: React.FC<{
  title: string;
  icon?: React.ReactNode;
}> = ({ title, icon }) => {
  return (
    <li className="w-full py-0.5">
      <a
        href=""
        className=" hover:bg-h-stock active:scale-105 hover:border-bg-h-background text-text-secondary  hover:text-text-black duration-150 flex flex-row items-center gap-2 border-2 border-h-stock  py-3 px-10 "
      >
        {icon ? <span className="text-xl">{icon}</span> : null}
        <p className="text-sm font-f-playwrite">{title}</p>
      </a>
    </li>
  );
};

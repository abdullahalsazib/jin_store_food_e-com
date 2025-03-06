import { FaAngleRight } from "react-icons/fa";

const My_Account: React.FC<{
  children?: React.ReactNode;
}> = ({ children }) => {
  return (
    <>
      <div className="w-full px-4 md:px-[10%]">
        <div className="w-full py-5 flex flex-row items-center gap-2 text-sm text-text-secondary font-f-opensans font-semibold border-b-[1px] border-h-stock">
          <a href="#">Home</a> <FaAngleRight />{" "}
          <p className="text-black">My Account</p>
        </div>
        {children}
      </div>
    </>
  );
};
export default My_Account;

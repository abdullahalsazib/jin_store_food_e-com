import React, { useState } from "react";
import { FaAngleRight } from "react-icons/fa";

const Login = () => {
  const [useLogin, setLogin] = useState(true);
  const [userType, setUserType] = useState("customer"); // Default selection

  return (
    <>
      <div className="w-full px-[10%]">
        <div className="w-full py-5 flex flex-row items-center justify-start gap-2 text-sm text-text-secondary font-f-opensans font-semibold border-b-[1px] border-h-stock">
          <a href="#">Home</a> <FaAngleRight />{" "}
          <p className="text-black">My Account</p>
        </div>

        {/* Content of Login/Register */}
        <div className="flex items-center justify-center w-full p-10 flex-col gap-5 h-[80%]">
          <div className="w-[45%] bg-white h-full font-f-playwrite font-extrabold">
            <div className="d-center gap-2 text-3xl">
              <button
                onClick={() => setLogin(true)}
                className={`cursor-pointer ${
                  useLogin ? "text-gray-800" : "text-gray-400"
                }`}
              >
                Login
              </button>
              <button
                onClick={() => setLogin(false)}
                className={`cursor-pointer ${
                  !useLogin ? "text-gray-800" : "text-gray-400"
                }`}
              >
                Register
              </button>
            </div>

            {useLogin ? (
              <form className="py-10 px-20 font-f-opensans font-normal flex items-center justify-center flex-col w-full gap-5">
                <p className="text-sm text-text-gray-black text-center py-3">
                  If you have an account, sign in with your username or email
                  address.
                </p>
                <LabelInput
                  label="Username or email address"
                  type="text"
                  placeholder="Enter your username or email address"
                  isImportant
                />
                <LabelInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  isImportant
                />
                <RememberMe />
                <ButtonForSubmit />
              </form>
            ) : (
              <form className="py-10 px-20 font-f-opensans font-normal flex items-center justify-center flex-col w-full gap-5">
                <p className="text-sm text-text-gray-black text-center py-3">
                  There are many advantages to creating an account: the payment
                  process is faster, shipment tracking is possible, and much
                  more.
                </p>
                <LabelInput
                  label="Username"
                  type="text"
                  placeholder="Enter your username"
                  isImportant
                />
                <LabelInput
                  label="Email"
                  type="email"
                  placeholder="Enter your email"
                  isImportant
                />
                <LabelInput
                  label="Password"
                  type="password"
                  placeholder="Enter your password"
                  isImportant
                />
                <RadioButtonGroup
                  options={[
                    { label: "I am a Customer", value: "customer" },
                    { label: "I am a Vendor", value: "vendor" },
                  ]}
                  name="userType"
                  selectedValue={userType}
                  onChange={setUserType}
                />

                <p className="text-sm text-text-gray-black text-left py-3">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="text-red-600">privacy policy</span>.
                </p>
                <ButtonForSubmit text="Register" />
              </form>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

const LabelInput: React.FC<{
  label: string;
  type: string;
  placeholder: string;
  isImportant?: boolean;
}> = ({ label, type, placeholder, isImportant = false }) => {
  return (
    <label className="flex flex-col gap-1 w-full">
      <p>
        {label} {isImportant && <span className="text-red-600">*</span>}
      </p>
      <input
        type={type}
        className="w-full py-2 px-4 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 duration-150"
        placeholder={placeholder}
      />
    </label>
  );
};

const RememberMe: React.FC = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <label className="flex items-center gap-2 text-sm">
        <input type="checkbox" className="w-4 h-4 accent-blue-500" />
        Remember Me
      </label>
      <a href="#" className="text-sm text-blue-600 hover:underline">
        Lost your password?
      </a>
    </div>
  );
};

const ButtonForSubmit: React.FC<{ onClick?: () => void; text?: string }> = ({
  onClick,
  text = "Submit",
}) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 px-4 rounded-md hover:bg-[#8C7AE6] cursor-pointer duration-150 active:scale-95 bg-[#634C9F] flex items-center justify-center"
    >
      <span className="text-white font-semibold text-lg relative z-10">
        {text}
      </span>
    </button>
  );
};


const RadioButtonGroup: React.FC<{
  options: { label: string; value: string }[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}> = ({ options, name, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex items-center gap-2 cursor-pointer"
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={() => onChange(option.value)}
            className="w-4 h-4 accent-[#8C7AE6]"
          />
          {option.label}
        </label>
      ))}
    </div>
  );
};

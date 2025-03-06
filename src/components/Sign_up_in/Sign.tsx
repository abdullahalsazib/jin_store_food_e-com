import React, { useState } from "react";

const Sign = () => {
  const [useLogin, setLogin] = useState(true);
  const [userType, setUserType] = useState("customer"); // Default selection
  return (
    <>
      {/* Content of Login/Register */}
      <div className="flex items-center justify-center w-full p-5 md:p-10 flex-col gap-5 h-auto">
        <div className="w-full max-w-lg bg-white h-full font-f-playwrite font-extrabold p-5 md:p-10 rounded-lg shadow-md">
          <div className="flex justify-center gap-4 text-xl md:text-3xl">
            <button
              onClick={() => setLogin(true)}
              className={`cursor-pointer! ${
                useLogin
                  ? "text-gray-800"
                  : "text-gray-400 hover:text-gray-600 duration-150 active:scale-95 "
              }`}
            >
              Login
            </button>
            <button
              onClick={() => setLogin(false)}
              className={`cursor-pointer! ${
                !useLogin
                  ? "text-gray-800"
                  : "text-gray-400 hover:text-gray-600 duration-150 active:scale-95 "
              }`}
            >
              Register
            </button>
          </div>

          {useLogin ? (
            <form className="py-6 md:py-10 px-4 md:px-10 font-f-opensans font-normal flex items-center justify-center flex-col w-full gap-5">
              <p className="text-xs md:text-sm text-text-gray-black text-center py-3">
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
              <RememberMe text="Remember Me" text2="Lost your password?" />
              <ButtonForSubmit />
            </form>
          ) : (
            <form className="py-6 md:py-10 px-4 md:px-10 font-f-opensans font-normal flex items-center justify-center flex-col w-full gap-5">
              <p className="text-xs md:text-sm text-text-gray-black text-center py-3">
                There are many advantages to creating an account: faster
                payment, shipment tracking, and more.
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

              <p className="text-xs md:text-sm text-text-gray-black text-left py-3">
                Your personal data will be used to support your experience,
                manage your account, and more, as described in our{" "}
                <span className="text-red-600">privacy policy</span>.
              </p>
              <ButtonForSubmit text="Register" />
            </form>
          )}
        </div>
      </div>
    </>
  );
};

export default Sign;

// Label Input Component
export const LabelInput: React.FC<{
  label: string;
  type: string;
  placeholder: string;
  isImportant?: boolean;
}> = ({ label, type, placeholder, isImportant = false }) => {
  return (
    <label className="flex flex-col gap-3 w-full text-sm font-f-opensans">
      <p>
        {label} {isImportant && <span className="text-red-600">*</span>}
      </p>
      <input
        type={type}
        className="w-full py-2 px-4 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 duration-150 text-sm"
        placeholder={placeholder}
      />
    </label>
  );
};

// Remember Me Component
export const RememberMe: React.FC<{
  text?: string;
  text2?: string;
  onClick?: () => void;
  isImportant?: boolean;
  children?: React.ReactNode;
}> = ({ text, text2, onClick, isImportant = false, children }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between w-full text-sm">
      <label className="flex items-center gap-2">
        <input
          onClick={onClick}
          type="checkbox"
          className="w-4 h-4 accent-blue-500"
        />
        {children}
        {text} {isImportant && <span className="text-red-600">*</span>}
      </label>
      <a href="#" className="text-blue-600 hover:underline mt-2 md:mt-0">
        {text2}
      </a>
    </div>
  );
};

// Submit Button Component
export const ButtonForSubmit: React.FC<{
  onClick?: () => void;
  text?: string;
}> = ({ onClick, text = "Submit" }) => {
  return (
    <button
      onClick={onClick}
      className="w-full py-2 px-4 rounded-md hover:bg-[#8C7AE6] cursor-pointer duration-150 active:scale-95 bg-[#634C9F] flex items-center justify-center"
    >
      <span className="text-white font-semibold text-base relative z-10">
        {text}
      </span>
    </button>
  );
};

// Radio Button Group Component
const RadioButtonGroup: React.FC<{
  options: { label: string; value: string }[];
  name: string;
  selectedValue: string;
  onChange: (value: string) => void;
}> = ({ options, name, selectedValue, onChange }) => {
  return (
    <div className="flex flex-col md:flex-row gap-2 w-full text-sm">
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

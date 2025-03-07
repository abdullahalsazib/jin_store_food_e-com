import { BsTelephone } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const footerLinks = [
  { name: "Sell on Grogin", url: "/sell-on-grogin" },
  { name: "Sell Your Services on Grogin", url: "/sell-services" },
  { name: "Sell on Grogin Business", url: "/sell-business" },
  { name: "Sell Your Apps on Grogin", url: "/sell-apps" },
  { name: "Become an Affiliate", url: "/affiliate" },
  { name: "Advertise Your Products", url: "/advertise" },
  { name: "Sell-Publish with Us", url: "/sell-publish" },
  { name: "Become a Blowwe Vendor", url: "/blowwe-vendor" },
];
const footerLinks2 = [
  { name: "Accessibility Statement", url: "/accessibility-statement" },
  { name: "Your Orders", url: "/your-orders" },
  { name: "Returns & Replacements", url: "/returns-replacements" },
  { name: "Shipping Rates & Policies", url: "/shipping-rates" },
  { name: "Refund and Returns Policy", url: "/refund-policy" },
  { name: "Privacy Policy", url: "/privacy-policy" },
  { name: "Terms and Conditions", url: "/terms-conditions" },
  { name: "Cookie Settings", url: "/cookie-settings" },
  { name: "Help Center", url: "/help-center" },
];
const footerLinks3 = [
  { name: "Careers for Grogin", url: "/careers" },
  { name: "About Grogin", url: "/about" },
  { name: "Investor Relations", url: "/investor-relations" },
  { name: "Grogin Devices", url: "/devices" },
  { name: "Customer Reviews", url: "/customer-reviews" },
  { name: "Social Responsibility", url: "/social-responsibility" },
  { name: "Store Locations", url: "/store-locations" },
];
const Main_Footer = () => {
  return (
    <>
      <div className=" w-full px-[10%] py-5 ">
        <div className=" flex items-center justify-between border-b-2 border-h-stock py-20">
          <div className=" flex items-start justify-center flex-col gap-2 ">
            <h1 className=" text-2xl font-f-playwrite font-extrabold">
              Join our newsletter for £10 offs
            </h1>
            <p className=" text-sm font-f-opensans text-slate-500">
              Register now to get latest updates on promotions & coupons.Don’t
              worry, we not spam!
            </p>
          </div>
          <div>
            <form className="flex items-end justify-center flex-col gap-2">
              <div className=" flex flex-row gap-2 w-full">
                <div className=" w-full relative">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="py-2 w-full px-10 rounded-md border border-gray-300 outline-none focus:ring-2 focus:ring-blue-500 duration-150 text-sm"
                  />
                  <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-lg" />
                </div>
                <button className="py-2 px-4 cursor-pointer bg-h-background text-white rounded-[5px] font-f-opensans hover:text-white duration-200 active:scale-105 text-sm">
                  Subscribe
                </button>
              </div>
              <p className=" text-xs">
                By subscribing you agree to our{" "}
                <span className=" text-text-primary">
                  Terms & Conditions and Privacy & Cookies Policy
                </span>
                .
              </p>
            </form>
          </div>
        </div>
        {/* footer mid section */}
        <div className=" w-full border-b-2 border-h-stock py-20 font-f-opensans grid grid-cols-5 gap-4 items-start justify-center ">
          <div className=" flex flex-col items-start justify-between gap-10">
            <h1 className=" font-bold font-f-playwrite text-2xl">
              Do You Need Help ?
            </h1>
            <p className=" text-xs font-f-playwrite text-slate-500">
              Autoseligen syr. Nek diarask fröbomba. Nör antipol kynoda nynat.
              Pressa fåmoska.
            </p>
            <div className=" flex flex-row gap-5 font-f-opensans">
              <BsTelephone className=" text-3xl" />
              <div className=" flex flex-col ">
                <p className="text-xs">Monday-Friday: 08am-9pm</p>
                <h3 className=" font-bold text-2xl">0 800 300-353</h3>
              </div>
            </div>
            <div className=" flex flex-row gap-5 font-f-opensans">
              <MdEmail className=" text-3xl" />
              <div className=" flex flex-col ">
                <p className="text-xs">Need help with your order?</p>
                <h3 className=" font-bold text-2xl">info@example.com</h3>
              </div>
            </div>
          </div>
          <div>
            <h1>Make Money with Us</h1>
            <ul>
              {footerLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-slate-400 font-f-playwrite text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Get to Know Us</h1>
            <ul>
              {footerLinks3.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-slate-400 font-f-playwrite text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h1>Let Us Help You</h1>
            <ul>
              {footerLinks2.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.url}
                    className="text-slate-400 font-f-playwrite text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {/* fot icons to install */}
          <div>
            <h1>Let Us Help You</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main_Footer;

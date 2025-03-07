import Main_Footer from "./components/Main_Footer";
import Nav_Layout from "./components/Nav_Layout";
import My_Account from "./components/Sign_up_in/My_Account";
// import Sign from "./components/Sign_up_in/Sign";
import Vendor_Admin_Dashbord from "./components/Sign_up_in/Vendor_Admin_Dashbord";

const App = () => {
  return (
    <>
      <Nav_Layout />
      <div className=" w-full ">
        <My_Account>
          {/* <Sign/> */}
          <Vendor_Admin_Dashbord />
        </My_Account>
      </div>
      <Main_Footer />
    </>
  );
};

export default App;

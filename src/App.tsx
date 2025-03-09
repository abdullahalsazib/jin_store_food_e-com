import Main_Footer from "./components/Main_Footer";
import Nav_Layout from "./components/Nav_Layout";
import Home from "./components/Pages/home/Home";
// import My_Account from "./components/Sign_up_in/My_Account";
// import Sign from "./components/Sign_up_in/Sign";
// import Vendor_Admin_Dashbord from "./components/Sign_up_in/Vendor_Admin_Dashbord";
import Header1_row from "./small-components/Header_Rows/Header1_row";
import Notification from "./small-components/Notification";
import Topber from "./small-components/Topber";

const App = () => {
  return (
    <>
      <Nav_Layout>
        <Notification />
        <Header1_row />
        <Topber />
      </Nav_Layout>
      <div className=" w-full">
        <Home />
        {/* <My_Account>
          <Vendor_Admin_Dashbord />
        </My_Account> */}
      </div>
      {/* <Main_Footer /> */}
    </>
  );
};

export default App;

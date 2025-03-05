import Nav_Layout from "./components/Nav_Layout";
import Login from "./components/Sign_up_in/Login";

const App = () => {
  return (
    <>
      <Nav_Layout />
      <div className=" w-full h-full">
        <Login/>
      </div>
    </>
  );
};

export default App;

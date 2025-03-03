import Header1_row from "./small-components/Header_Rows/Header1_row";
import Notification from "./small-components/Notification";
import Topber from "./small-components/Topber";

const App = () => {
  return (
    <>
      <div>
        <Notification />
        <Header1_row />
        <Topber/>
        <h1>App</h1>
      </div>
    </>
  );
};

export default App;

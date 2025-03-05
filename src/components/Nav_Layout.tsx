import React from "react";
import Notification from "../small-components/Notification";
import Header1_row from "../small-components/Header_Rows/Header1_row";
import Topber from "../small-components/Topber";
import Header2_row from "../small-components/Header_Rows/Header2_row";

const Nav_Layout = () => {
  return (
    <div>
      <Notification />
      <Header1_row />
      <Topber />
      <Header2_row />
    </div>
  );
};

export default Nav_Layout;

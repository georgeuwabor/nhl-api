import React from "react";
import "./Bar.css";
import Drawer from "../SideDrawer/Drawer";

const Bar = (props) => {
  return (
    <>
      <header className="baar">
        <nav className="baar-nav">
          <div>
            <Drawer />
          </div>
          <div className="baar_icon">
            <a href="/">NHL</a>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Bar;

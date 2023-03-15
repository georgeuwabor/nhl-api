import React, { useState } from "react";
import "./Bar.css";
import Drawer from "./Drawer/Drawer";

const Bar = (props) => {
  const [drawer, setDrawer] = useState(false);

  return (
    <>
      <header className="baar">
        <nav className="baar-nav">
          <div className="baar_icon">
            <p onClick={() => setDrawer(!drawer)}>NHL</p>
          </div>
        </nav>
      </header>
      {drawer ? <Drawer /> : ""}
    </>
  );
};

export default Bar;

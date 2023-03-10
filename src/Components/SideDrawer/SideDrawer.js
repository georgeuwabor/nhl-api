import React from "react";
import "./SideDrawer.css";

const sideDrawer = () => {
  return (
    <>
      <nav className="sideDrawer">
        <ul>
          <li>
            <a href="/">products</a>
          </li>
          <li>
            <a href="/">users</a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default sideDrawer;

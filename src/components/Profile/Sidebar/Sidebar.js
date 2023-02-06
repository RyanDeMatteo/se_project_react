import React from "react";
import "./Sidebar.css";
import avatarDefault from "../../../images/avatar-default.svg";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <img className="sidebar__avatar" src={avatarDefault} alt="user avatar" />
    </div>
  );
}

export default Sidebar;

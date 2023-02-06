import React from "react";
import "./Sidebar.css";
import avatarDefault from "../../../images/avatar-default.svg";

function Sidebar() {
  return (
    <div className="sidebar__container">
      <div className="sidebar__header">
        <img
          className="sidebar__avatar"
          src={avatarDefault}
          alt="user avatar"
        />
        <p className="sidebar__name">Tim Turner</p>
      </div>
    </div>
  );
}

export default Sidebar;

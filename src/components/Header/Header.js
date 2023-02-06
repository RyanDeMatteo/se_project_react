import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import logoPath from "../../images/logo.svg";
import avatarDefault from "../../images/avatar-default.svg";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";

const Header = ({ weatherData, handleAddClick }) => {
  if (!weatherData) return null;
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });
  const username = "Tim Turner";

  return (
    <header className="header">
      <div className="header__container">
        <NavLink to="/">
          <img
            src={logoPath}
            alt="What to Wear logo"
            className="header__logo"
          />
        </NavLink>
        <p className="header__date">
          {currentDate}, {weatherData.city}
        </p>
      </div>
      <div className="header__nav-container">
        <ToggleSwitch />
        <button onClick={handleAddClick} className="header__nav-button">
          + Add clothes
        </button>
        <NavLink to="/profile" className="header__nav-user">
          {username}
        </NavLink>
        <NavLink to="/profile">
          <img
            className="header__nav-avatar"
            src={avatarDefault}
            alt="user avatar"
          />
        </NavLink>
      </div>
    </header>
  );
};

export default Header;

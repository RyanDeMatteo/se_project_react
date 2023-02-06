import React from "react";
import "./Profile.css";
import Sidebar from "./Sidebar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile() {
  return (
    <div className="profile__container">
      <Sidebar />
    </div>
  );
}

export default Profile;

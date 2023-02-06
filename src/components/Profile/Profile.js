import React from "react";
import "./Profile.css";
import Sidebar from "./Sidebar/Sidebar";
import ClothesSection from "./ClothesSection/ClothesSection";

function Profile({ clothingItems, handleCardClick, openModal }) {
  return (
    <div className="profile__container">
      <Sidebar />
      <ClothesSection
        clothingItems={clothingItems}
        handleCardClick={handleCardClick}
        openModal={openModal}
      />
    </div>
  );
}

export default Profile;

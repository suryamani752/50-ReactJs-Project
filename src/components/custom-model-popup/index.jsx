import React, { useState } from "react";
import Model from "./modal";

const CustomModelPopup = () => {
  const [openModelPopup, setOpenModelPopup] = useState(false);

  function handleToggleModelPopup() {
    setOpenModelPopup((prev) => !prev);
  }
  function onClose() {
    setOpenModelPopup(false);
  }
  return (
    <div className="flex justify-center items-center h-screen">
      <button className="bg-black text-white text-xl p-5 rounded-lg shadow-lg" onClick={handleToggleModelPopup}>Open model Popup</button>
      {openModelPopup && (
        <Model
          id={"custom-id"}
          header={<h1>Customized Header</h1>}
          footer={<h1>Customized Footer</h1>}
          onClose={onClose}
          body={<div>Customized body</div>}
        />
      )}
    </div>
  );
};

export default CustomModelPopup;

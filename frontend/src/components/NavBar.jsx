import React from "react";
import icon from "../assets/icons/animalCare.svg";

function NavBar() {
  return (
    <>
      <div className=" bg-slate-400">
        <div className="flex justify-between mx-32 ">
          <div className="w-10 h-10">
            <img src={icon} alt="logo" height={32} />
          </div>
          <div className="flex gap-8 ">
            <div>Features</div>
            <div>About Us</div>
            <div>Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

import React from "react";
import icon from "../assets/icons/animalCare.svg";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <>
      <div className=" bg-slate-400">
        <div className="flex justify-between mx-12 items-center p-4">
          <div className="w-10 h-10">
            <Link to="/">
              <img src={icon} alt="logo" height={32} />
            </Link>
          </div>
          <div className="flex gap-8 ">
            <div className="text-md uppercase font-semibold tracking-wider cursor-pointer hover:underline  ">
              <Link to="/features">Features</Link>
            </div>
            <div className="text-md uppercase font-semibold tracking-wider cursor-pointer hover:underline ">
              <Link to="/about">About Us</Link>
            </div>
            <div className="text-md uppercase font-semibold tracking-wider cursor-pointer hover:underline ">
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

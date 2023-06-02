import React, { useState } from "react";
import icon from "../assets/icons/animalCare.svg";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function NavBar() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => {
    setToggle(!toggle);
  };

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
            <ul className="hidden md:flex">
              <Link to="/">
                <li className="ml-10 text-sm uppercase hover:border-b">Home</li>
              </Link>

              <Link to="/features">
                <li className="ml-10 text-sm uppercase hover:border-b ">
                  Features
                </li>
              </Link>
              <Link to="/about">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  About us
                </li>
              </Link>
              <Link to="/contact">
                <li className="ml-10 text-sm uppercase hover:border-b">
                  Contact
                </li>
              </Link>
            </ul>
          </div>
          <div
            className="md:hidden hover:scale-110 ease-in-out duration-300"
            onClick={handleToggle}
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>

        {/* For hidden part of navabar */}
        <div
          className={
            toggle
              ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80"
              : ""
          }
        >
          <div
            className={
              toggle
                ? "fixed left-0 top-0 w-[75%] sm:[60%] md:[45%] h-screen  bg-[#ecf0f3] p-10 ease-in duration-500"
                : "fixed left-[-100%] top-0 p-10 ease-in duration-400"
            }
          >
            <div>
              <div className="flex w-full items-center justify-between">
                <Link to="/">
                  <img src={icon} alt="logo" className="w-[50px] h-[50px]" />
                </Link>
                <div
                  className="rounded-full shadow-lg shadow-gray-500 p-2 cursor-pointer"
                  onClick={handleToggle}
                >
                  <AiOutlineClose size={20} />
                </div>
              </div>
              {/* tasd */}
              <div className="border-b border-gray-400 my-4">
                <p className="w-[85%] md:w-[90%] py-2">Animal Farm</p>
              </div>
            </div>
            {/* adsflsd */}
            <div className="py-4 flex flex-col">
              <ul className="uppercase">
                <Link to="/home">
                  <li onClick={() => setToggle(false)} className="py-4 text-sm">
                    Home
                  </li>
                </Link>

                <Link to="/features">
                  <li onClick={() => setToggle(false)} className="py-4 text-sm">
                    features
                  </li>
                </Link>
                <Link to="/about">
                  <li onClick={() => setToggle(false)} className="py-4 text-sm">
                    About Us
                  </li>
                </Link>
                <Link to="/contact">
                  <li onClick={() => setToggle(false)} className="py-4 text-sm">
                    Contact
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavBar;

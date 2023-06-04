import React from "react";
import icon from "../assets/icons/animalCare.svg";
import { MdArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-gray-400 ">
      <div className="mx-auto max-w-[1080px] p-2 flex overflow-hidden ">
        {/* left most side */}
        <div className="w-[25%]">
          <div className="flex items-center ">
            <div className="cursor-pointer">
              {/* <L */}
              <img src={icon} alt="logo" width={50} />
            </div>
            <span className="text-lg p-4 uppercase font-semibold tracking-wider ">
              Animal farm
            </span>
          </div>
          <p className="text-md text-white p-2 text-justify">
            Info about the websites Info about the websites Info about the
            websites Info about the websites
          </p>
        </div>

        {/* About section part */}
        <div className="p-2 mx-4 w-[25%]">
          <p className="text-lg uppercase font-semibold tracking-wider">
            Useful Links
          </p>
          <hr />
          <ol>
            <ul className="flex items-center py-2 ">
              <MdArrowRight size={20} />
              <p className="hover:scale-110 duration-300 ease-in-out text-md uppercase ml-2">
                <Link>About Us</Link>
              </p>
            </ul>
            <hr />
            <ul className="flex items-center py-2 ">
              <MdArrowRight size={20} />
              <p className="hover:scale-110 duration-300 ease-in-out text-md uppercase ml-2">
                <Link>About Us</Link>
              </p>
            </ul>
            <hr />
            <ul className="flex items-center py-2 ">
              <MdArrowRight size={20} />
              <p className="hover:scale-110 duration-300 ease-in-out text-md uppercase ml-2">
                <Link>About Us</Link>
              </p>
            </ul>
            <hr />
            <ul className="flex items-center py-2 ">
              <MdArrowRight size={20} />
              <p className="hover:scale-110 duration-300 ease-in-out text-md uppercase ml-2">
                <Link>About Us</Link>
              </p>
            </ul>
            <hr />
          </ol>
        </div>

        {/* Contact us part */}
        <div className=" w-[25%] p-2 mx-4 ">
          <p className="text-lg font-semibold uppercase tracking-wider">
            Contact Us
          </p>
          <hr />
          <div className="flex items-center p-1">
            <p className="font-bold text-md ">Email:</p>
            <span className="text-md ml-2">animalCare.com.np</span>
          </div>
          <div className="p-3 flex items-center ">
            <Link to="/">
              <FaFacebookF
                size={25}
                className="hover:scale-110 duration-300 ease-in-out mx-2"
              />
            </Link>
            <Link to="/">
              <FaTwitter
                size={25}
                className="hover:scale-110 duration-300 ease-in-out mx-2"
              />
            </Link>

            <Link to="/">
              <FaInstagram
                size={25}
                className="hover:scale-110 duration-300 ease-in-out mx-2"
              />
            </Link>
            <Link to="/">
              <FaYoutube
                size={28}
                className="hover:scale-110 duration-300 ease-in-out mx-2"
              />
            </Link>
          </div>
        </div>

        {/* Right most part */}
      </div>
    </div>
  );
};

export default Footer;

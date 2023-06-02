import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../../components/NavBar";
import InfoBar from "../../components/InfoBar";
import Footer from "../../components/Footer";
const HomeLayout = () => {
  return (
    <>
      <InfoBar />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default HomeLayout;

import React from "react";
// import Navbar from "../pages/share/navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/share/footer";
import Navbar from "../pages/share/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;

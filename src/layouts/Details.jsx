import React from "react";
import Navbar from "../pages/share/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/share/footer";

const Details = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Details;

import React from "react";
import Navbar from "../pages/share/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../pages/share/footer";

const RegisterLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default RegisterLayout;

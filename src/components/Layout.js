import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="">
      <nav className="flex justify-between py-8  px-8 bg-white shadow-md">
        <p>Where in the world?</p>
        <p>Drak Mode</p>
      </nav>
      <div className="pt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

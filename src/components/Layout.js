import React from "react";
import { Outlet } from "react-router-dom";
import Switcher from "./Switcher";

const Layout = () => {
  return (
    <div className="">
      <nav className="flex justify-between py-8  px-8 bg-white shadow-md  dark:bg-darkblue">
        <p className="dark:text-white">Where in the world?</p>
        <Switcher />
      </nav>
      <div className="pt-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;

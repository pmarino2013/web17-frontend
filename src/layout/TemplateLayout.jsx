import React from "react";
import { Outlet } from "react-router-dom";
import NavBarApp from "../components/NavBarApp";

const TemplateLayout = () => {
  return (
    <>
      <NavBarApp />
      <div className="mt-4">
        <Outlet />
      </div>
    </>
  );
};

export default TemplateLayout;

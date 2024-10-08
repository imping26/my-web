import React from "react";
import { Outlet } from "react-router-dom"; 
import Menubar from "./Menubar";

function RootLayout() {
  return (
    <> 
      <Outlet/>
      <Menubar />
    </>
  );
}

export default RootLayout;

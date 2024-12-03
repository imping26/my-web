import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "./Menubar";
import { Toaster } from "sonner";

function RootLayout() {
  return (
    <>
      <Toaster richColors position="top-center" />
      <Outlet />
      <Menubar />
    </>
  );
}

export default RootLayout;

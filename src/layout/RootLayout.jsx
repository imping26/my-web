import React from "react";
import { Outlet } from "react-router-dom";
import Topnav from "./Topnav";
import Menubar from "./Menubar";

function RootLayout() {
  return (
    <>
      <Topnav />
      <div className="flex flex-col  h-screen max-w-[1280px] mx-auto">
        <main className="flex-grow">
          <Outlet />
        </main>
        <Menubar />
      </div>
    </>
  );
}

export default RootLayout;

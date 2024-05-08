/* eslint-disable @next/next/no-img-element */
"use client";
import sideMenu from "@/data/sideMenu";
import React, { useState } from "react";
import classNames from "classnames";
import UserMenu from "./UserMenu";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";
import Main from "./Main";
const Dashboard = () => {
  const [openSideMenu, setOpenSideMenu] = useState(false);
  const [open, setOpen] = useState(null);

  const toggle = (index: any) => {
    setOpen(index === open ? null : index);
  };

  const toggleSideBar = () => {
    setOpenSideMenu(!openSideMenu);
  };
  return (
    <>
      <Sidebar />

      <div className="p-4 lg:ml-[312px] ">
        <NavBar />

        <div className="lg:p-4  rounded-lg mt-10 lg:mt-20 overflow-hidden">
          <Main />
        </div>
      </div>
    </>
  );
};

export default Dashboard;

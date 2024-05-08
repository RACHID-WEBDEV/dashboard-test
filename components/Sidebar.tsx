/* eslint-disable @next/next/no-img-element */
"use client";
import sideMenu from "@/data/sideMenu";
import React, { useState } from "react";
import classNames from "classnames";

const Sidebar = () => {
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
      <button
        onClick={toggleSideBar}
        type="button"
        className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar Mobile</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          />
        </svg>
      </button>
      {openSideMenu && (
        <div className=" fixed top-4 right-3 z-10" onClick={toggleSideBar}>
          <span className="text-bgBlue hover:bg-white bg-yellow rounded-lg p-2.5  inline-flex items-center">
            <span className="sr-only">Close sidebar Mobile</span>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </span>
        </div>
      )}

      {/* BG OVERLAY */}
      {openSideMenu && (
        <div className=" bg-neutral-800/60 transition-all duration-500 fixed w-full h-full inset-0 "></div>
      )}
      <aside
        className={classNames(
          "fixed top-0 left-0 z-40 w-[312px] h-screen transition-transform lg:translate-x-0 ",
          { "-translate-x-full": openSideMenu === false },
          { "translate-x-0 ": openSideMenu === true }
        )}
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 overflow-y-auto bg-bgBlue ">
          <div className="py-6 px-4 mt-8">
            <img src="/assets/Logo.svg" alt="logo" />
          </div>
          <ul className="space-y-2">
            {sideMenu.map(
              (
                { title, iconPath, subMenuIcon, subMenu, internalTool },
                index
              ) => (
                <li key={index} className="">
                  {internalTool && (
                    <p className="px-4 mt-6 pb-2 text-white/60 uppercase text-sm -ml-2">
                      Internal Tool
                    </p>
                  )}
                  <a
                    href="#"
                    onClick={() => toggle(index)}
                    className="flex items-center p-2 py-4 text-white-color rounded-lg  group w-full text-base  transition duration-75 hover:bg-yellow/10"
                  >
                    <img src={iconPath} alt="icon" />
                    <span className="flex-1 ms-3 text-left  whitespace-nowrap font-normal">
                      {title}
                    </span>

                    {subMenuIcon && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={` transition-all duration-300 ${
                          open === index ? "rotate-180" : ""
                        }`}
                      >
                        <path
                          d="M5 7.5L10 12.5L15 7.5"
                          stroke="#EAAA08"
                          strokeWidth="1.66667"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    )}
                  </a>
                  {open === index && subMenu.length !== 0 && (
                    <ul id="dropdown-example" className={` py-2 space-y-2`}>
                      {subMenu.map(({ title }, subIndex) => (
                        <li key={subIndex} className="group">
                          <a
                            href="#"
                            className="flex items-center gap-3 w-full p-2 py-3 text-white-color group-hover:text-bgBlue transition duration-75 rounded-md pl-11 group hover:bg-yellow "
                          >
                            <div className=" p-1 bg-yellow group-hover:bg-bgBlue rounded-full"></div>

                            <p>{title}</p>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              )
            )}
          </ul>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;

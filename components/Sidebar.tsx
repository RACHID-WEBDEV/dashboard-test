/* eslint-disable @next/next/no-img-element */
"use client";
import sideMenu from "@/data/sideMenu";
import React, { useState } from "react";
import classNames from "classnames";

const Sidebar = ({ openSideMenu }: { openSideMenu: boolean }) => {
  const [open, setOpen] = useState(null);

  const toggle = (index: any) => {
    setOpen(index === open ? null : index);
  };

  return (
    <>
      <aside
        className={classNames(
          "fixed top-0 left-0 z-40 w-[260px] md:w-[312px] h-screen transition-transform lg:translate-x-0 ",
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

/* eslint-disable @next/next/no-img-element */
import React from "react";
import Tab from "./Tab";
import content from "@/data/contentdata";

const Main = () => {
  return (
    <div>
      <div className="flex items-center gap-4 py-2 flex-wrap">
        <img src="/assets/icons/home-2.svg" alt="icon" />
        <p className="text-gray-400">User Management</p>
        <img src="/assets/icons/Arrow-right.svg" alt="arrow-right" />
        <p className="text-gray-400">Users</p>
        <img
          src="/assets/icons/Arrow-right.svg"
          alt="arrow-right"
          className="hidden md:block"
        />
        <p className="text-[#344054] font-semibold hidden md:block">
          Abdullah Nasir
        </p>
      </div>

      <div className="flex items-end gap-4 pt-6">
        <img
          className="w-16 h-16 rounded-full"
          src="/assets/icons/Avatars-2.png"
          alt="avatar"
        />
        <div>
          <h2 className="font-medium text-3xl tracking-[-1.5px] pb-2">
            Abdullah Nasir
          </h2>
        </div>
      </div>

      <Tab data={content} />
    </div>
  );
};

export default Main;

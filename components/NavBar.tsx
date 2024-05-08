/* eslint-disable @next/next/no-img-element */
import React from "react";
import UserMenu from "./UserMenu";

const NavBar = () => {
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  function toggleExpansion() {
    setShowUserMenu(!showUserMenu);
  }
  return (
    <div className="w-full pl-4 lg:pl-[330px] bg-white py-4 fixed top-0 right-0 z-30 border-b border-[#E4E7EC]">
      <div className="flex  items-center justify-between">
        <form>
          <label
            htmlFor="search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          >
            Search
          </label>

          <div className="relative">
            <div className="absolute inset-y-0 start-0 flex items-center ps-5 pointer-events-none">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
                  stroke="#667085"
                  strokeWidth="1.66667"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 ps-12 text-base text-gray-500 border lg:w-[500px] border-none rounded-lg bg-[#F2F4F7] outline-none focus:ring-gray-300 focus:border-gray-300 "
              placeholder="Search"
              required
            />
          </div>
        </form>

        <div className="pr-4 lg:pr-8 relative">
          <div className="flex items-center ml-3 gap-4 lg:gap-6  ">
            <img
              src="/assets/icons/notification.svg"
              alt="notification"
              className="cursor-pointer"
            />

            <button
              onClick={toggleExpansion}
              className="flex rounded-full cursor-pointer"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-12 h-12 rounded-full"
                src="/assets/icons/Avatar-1.png"
                alt="user photo"
              />
            </button>
          </div>

          {showUserMenu && <UserMenu />}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

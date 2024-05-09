/* eslint-disable @next/next/no-img-element */
import React from "react";
import UserMenu from "./UserMenu";

const NavBar = ({
  toggleSideBar,
  openSideMenu,
}: {
  toggleSideBar: any;
  openSideMenu: boolean;
}) => {
  const [showUserMenu, setShowUserMenu] = React.useState(false);

  function toggleExpansion() {
    setShowUserMenu(!showUserMenu);
  }
  return (
    <div className="w-full pl-4 lg:pl-[330px] bg-white py-4 fixed top-0 right-0 z-30 border-b border-[#E4E7EC]">
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
        <div className=" bg-neutral-900/70 transition-all duration-500 fixed w-full h-full inset-0 "></div>
      )}

      <div className="flex  items-center justify-between">
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

        <form className="hidden lg:flex">
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
            <div className="lg:hidden pr-4">
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

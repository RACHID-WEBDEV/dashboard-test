import React from "react";

import Link from "next/link";
import userMenu from "@/data/userMenu";

const UserMenu = () => {
  return (
    <div className="absolute top-10 right-3 transition-all duration-300 ease-in">
      <div className="z-50 my-4 text-base list-none bg-gray-100 divide-y divide-secondary-500 rounded shadow">
        <div className="px-6 py-4">
          <p className=" text-gray-800 font-bold p-0.5">Amarachi Joseph</p>
          <p className="text-sm font-medium text-gray-500 truncate ">
            amarachi.afroshipper.com
          </p>
        </div>
        <ul className="py-2">
          {userMenu.map(({ link, routeName }, index) => (
            <li key={index}>
              <Link
                href={link}
                className="block px-4 py-2 text-sm text-gray-800 hover:text-gray-900 hover:bg-gray-200"
              >
                {routeName}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default UserMenu;

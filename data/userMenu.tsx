type userNameType = {
  routeName: string;
  link: string;
};

const userMenu: userNameType[] = [
  {
    routeName: "Dashboard",
    link: "/dashboard",
  },
  {
    routeName: "Settings",
    link: "/settings",
  },

  {
    routeName: "Sign out",
    link: "/Sign out",
  },
];

export default userMenu;

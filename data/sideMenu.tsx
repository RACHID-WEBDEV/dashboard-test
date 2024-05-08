type subMenu = {
  title?: string;
  url?: string;
};
type sideMenuData = {
  title: string;
  iconPath: string;
  subMenuIcon: boolean;
  internalTool: boolean;
  url: string;
  subMenu: subMenu[];
};
const sideMenu: sideMenuData[] = [
  {
    title: "Home",
    iconPath: "/assets/icons/home.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/",
    subMenu: [],
  },
  {
    title: "User Management",
    iconPath: "/assets/icons/user.svg",
    subMenuIcon: true,
    internalTool: false,
    url: "/user-management",
    subMenu: [
      {
        title: "Users",
        url: "/user",
      },
      {
        title: "Employees",
        url: "/employees",
      },
      {
        title: "Drivers",
        url: "/drivers",
      },
      {
        title: "Influencers",
        url: "/influcers",
      },
    ],
  },
  {
    title: "Organizations",
    iconPath: "/assets/icons/orgarnization.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/organizations",
    subMenu: [],
  },
  {
    title: "Vehicles",
    iconPath: "/assets/icons/vechicles.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/vehicles",
    subMenu: [],
  },
  {
    title: "Shipments",
    iconPath: "/assets/icons/shipment.svg",
    subMenuIcon: true,
    internalTool: false,
    url: "/shipments",
    subMenu: [],
  },
  {
    title: "Wallet",
    iconPath: "/assets/icons/wallet.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/wallet",
    subMenu: [],
  },
  {
    title: "Transactions",
    iconPath: "/assets/icons/transaction.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/transactions",
    subMenu: [],
  },
  {
    title: "Shipping Quote",
    iconPath: "/assets/icons/shippment-qoute.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/shippment-qoute",
    subMenu: [],
  },
  {
    title: "Support Tickets",
    iconPath: "/assets/icons/support.svg",
    subMenuIcon: false,
    internalTool: true,
    url: "/support-tickets",
    subMenu: [],
  },
  {
    title: "Invoices",
    iconPath: "/assets/icons/invoice.svg",
    subMenuIcon: true,
    internalTool: false,
    url: "/invoices",
    subMenu: [],
  },
  {
    title: "Virtual Cards",
    iconPath: "/assets/icons/v-card.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/virtual-cards",
    subMenu: [],
  },
  {
    title: "Analytics",
    iconPath: "/assets/icons/analytics.svg",
    subMenuIcon: false,
    internalTool: false,
    url: "/analytics",
    subMenu: [],
  },
  {
    title: "Applications",
    iconPath: "/assets/icons/shipment.svg",
    subMenuIcon: true,
    internalTool: false,
    url: "/applications",
    subMenu: [],
  },
];

export default sideMenu;

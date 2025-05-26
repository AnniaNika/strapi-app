import { Link } from "gatsby";
import React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  CalendarIcon,
  ChartBarIcon,
  FolderIcon,
  HomeIcon,
  InboxIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
import "../styles/navigation.scss";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true, count: "5" },
  { name: "Team", href: "#", icon: UsersIcon, current: false },
  {
    name: "Projects",
    href: "#",
    icon: FolderIcon,
    current: false,
    count: "19",
  },
  {
    name: "Calendar",
    href: "#",
    icon: CalendarIcon,
    current: false,
    count: "20+",
  },
  { name: "Documents", href: "#", icon: InboxIcon, current: false },
  { name: "Reports", href: "#", icon: ChartBarIcon, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Navbar = ({ data, global }) => {
  console.log("data", data);
  console.log("global", global[0]);

  return (
    <nav className="h-full space-y-1" aria-label="Sidebar">
      <div className="logo mx-auto">
        <img
          src={global[0]?.logo?.localFile?.url}
          alt="logo image"
          className="mb-8"
        />
      </div>
      <div className="nagivation-menu">
        {/* {data[0].NavigationColumn.map((item, index) => (
          <a
            key={item.label}
            href={item.navSlug}
            className={classNames(
              item.current
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              "flex items-center rounded-md px-3 py-2 text-sm font-medium"
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <span className="truncate">{item.label}</span>
            {item.count ? (
              <span
                className={classNames(
                  item.current ? "bg-gray-50" : "bg-gray-200 text-gray-600",
                  "ml-auto inline-block rounded-full px-3 py-0.5 text-xs"
                )}
              >
                {item.count}
              </span>
            ) : null}
          </a>
        ))} */}

        {navigation.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? "bg-gray-200 text-gray-900"
                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
              "mb-3 flex items-center rounded-md px-3 py-2 text-sm font-medium",
            )}
            aria-current={item.current ? "page" : undefined}
          >
            <item.icon
              className={classNames(
                item.current ? "text-gray-500" : "text-gray-400",
                "-ml-1 mr-3 h-6 w-6 flex-shrink-0",
              )}
              aria-hidden="true"
            />
            <span className="truncate">{item.name}</span>
            {item.count ? (
              <span
                className={classNames(
                  item.current ? "bg-gray-50" : "bg-gray-200 text-gray-600",
                  "ml-auto inline-block rounded-full px-3 py-0.5 text-xs",
                )}
              >
                {item.count}
              </span>
            ) : null}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;

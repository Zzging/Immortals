import React from "react";
import "./Navbar.css";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as BiIcons from "react-icons/bi";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    icon: <BiIcons.BiUser className="fs-2" />,
    cName: "nav-text",
  },
  {
    title: "Home",
    path: "/",
    // icon: <BiIcons.BiUser />,
    cName: "nav-text",
  },
  {
    title: "About Us",
    path: "/about",
    // icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Gallery",
    path: "/gallery",
    // icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "Souvenirs Shop",
    path: "/souvenirsShop",
    // icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Activities",
    path: "/activities",
    // icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Contact Us",
    path: "/contact",
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    // icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];

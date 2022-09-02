import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
      <section className="nav pt-3">
        <section className="nav-info">
          <IconContext.Provider value={{ color: "#000" }}>
            <div className="nav-info-left">
              <section className="nav-info__returns">
                <Link to="#" className="menu-bars">
                  <FaIcons.FaBars
                    style={{ fontSize: 20 }}
                    onClick={showSidebar}
                  />
                </Link>
              </section>
            </div>

            <section className="nav-center">
              <section className="nav-info__terms d-flex align-items-center">
                <img
                  src="/img/Logo-small-header.svg"
                  alt="travel image"
                  className="image_logo"
                />
                <h1 className="header-name mb-0 text-nowrap">
                  IMMORTALS THAILAND
                </h1>
              </section>
            </section>

            <div
              className={isMobile ? "nav-links-mobile" : "nav-info-right"}
              onClick={() => setIsMobile(false)}
            >
              <section className="nav-info__returns fs-5 fw-light mr-2">
                Souvenirs Shop
              </section>
              <section className="nav-info__returns fs-5 fw-light">
                Login
              </section>

              <section className="nav-info__returns">
                <img
                  src="/img/Icon-feather-user.svg"
                  alt="travel image"
                  className="icon-cc"
                />
              </section>

              <section className="nav-info__returns">
                <img
                  src="/img/Icon-feather-shopping-bag.svg"
                  alt="travel image"
                  className="icon-cc"
                />
              </section>
            </div>

            <button className="mobile-menu-icon">
              <img
                src="/img/Icon-feather-shopping-bag.svg"
                className="icon-mobile"
              />
            </button>

            <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <ul className="nav-menu-items" onClick={showSidebar}>
                <li className="navbar-toggle">
                  <Link to="#" className="menu-bars">
                    <AiIcons.AiOutlineClose />
                  </Link>
                </li>
                {SidebarData.map((item, index) => {
                  return (
                    <li key={index} className={item.cName}>
                      <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </IconContext.Provider>
        </section>
      </section>
    </>
  );
}

export default Navbar;

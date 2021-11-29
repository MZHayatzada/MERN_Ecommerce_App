import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import "./custom.css";
import "./style.default.css";
import "./style.default.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./navStyle.css";
import { faDollyFlatbed, faUserAlt } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import NavLink from "./NavLink";
import NavFontAwesome from "./NavFontAwesome";

const Nav = () => {
  const [showContainer, setShowContainer] = useState(false);

  const navLinks = [
    {
      id: 1,
      linkTitle: "Home",
      link: "/",
    },
    {
      id: 2,
      linkTitle: "Shop",
      link: "/shop",
    },
    {
      id: 3,
      linkTitle: "Product detail",
      link: "/product-detail",
    },
  ];

  const navFontAwsome = [
    {
      id: 1,
      linkTitle: "Cart",
      link: "/cart",
      icon: faDollyFlatbed,
    },
    {
      id: 2,
      linkTitle: "",
      link: "/fav",
      icon: faHeart,
    },
    {
      id: 3,
      linkTitle: "Login",
      link: "/login",
      icon: faUserAlt,
    },
  ];

  return (
    <header className="header bg-white">
      <div className="container px-0 px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <div className="collapse navbar-collapse d-flex justify-content-around flex-custom ">
            <div className="nav-links w-100 ">
              <div className="d-flex w-100 justify-content-between">
                <div>
                  <Link to="/" className="navbar-brand">
                    <span
                      className="font-weight-bold text-uppercase text-dark"
                      id="logo"
                    >
                      Boutique
                    </span>
                  </Link>
                </div>
                <div>
                  <button
                    className="navbar-toggler navbar-toggler-right"
                    type="button"
                    onClick={() => setShowContainer(!showContainer)}
                  >
                    <span className="navbar-toggler-icon"></span>
                  </button>
                </div>
              </div>
              <div
                className={`${
                  showContainer
                    ? "links-container show-container d-flex justify-content-lg-around flex-lg-row flex-sm-column custom-css-nav"
                    : "links-container  d-flex justify-content-lg-around flex-lg-row flex-sm-column custom-css-nav"
                }`}
              >
                <ul className="navbar-nav mr-auto d-flex">
                  <div className="d-lg-flex justify-content-between ">
                    {navLinks.map((navLink,index) => {
                      return <NavLink key={index} {...navLink} />;
                    })}
                  </div>
                </ul>
                <div className="icon">
                  <Link to="/" className="navbar-brand">
                    <span
                      className="font-weight-bold text-uppercase text-dark"
                      id="logo"
                    >
                      Boutique
                    </span>
                  </Link>
                </div>
                <div className="login-cart-fav">
                  <ul className="navbar-nav ml-auto ">
                    {navFontAwsome.map((navFontAwsomeItem,index) => {
                      return <NavFontAwesome key={index} {...navFontAwsomeItem} />;
                    })}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

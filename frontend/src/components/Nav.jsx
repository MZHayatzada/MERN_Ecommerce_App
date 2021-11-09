import React from "react";
import { Link } from "react-router-dom";
// import "../App.css";
import "./custom.css"
import "./style.default.css"
import "./style.default.min.css"
import "bootstrap/dist/css/bootstrap.min.css";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

import { faDollyFlatbed, faUserAlt } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from "@fortawesome/free-regular-svg-icons";

// import "./bootstrap.min.css"
const Nav = () => {
  return (
    <header className="header bg-white">
      <div className="container px-0 px-lg-3">
        <nav className="navbar navbar-expand-lg navbar-light py-3 px-lg-0">
          <Link className="navbar-brand" to='/'>
            <span className="font-weight-bold text-uppercase text-dark">
              Boutique
            </span>
          </Link>
          <button
            className="navbar-toggler navbar-toggler-right"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/shop">
                  Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/product-detail">
                  Product detail
                </Link>
              </li>
            </ul>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
               
                  <i className="mr-1 text-gray">
                  <FontAwesomeIcon icon={faDollyFlatbed} />
                    </i>Cart
                  <small className="text-gray">(2)</small>
                </Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                
                  <i className="far mr-1">
                  <FontAwesomeIcon icon={faHeart} />
                  </i>
                  <small className="text-gray"> (0)</small>
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/login'>
                 
                  <i className="mr-1 text-gray">
                  <FontAwesomeIcon icon={faUserAlt} />
                    </i>Login
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Nav;

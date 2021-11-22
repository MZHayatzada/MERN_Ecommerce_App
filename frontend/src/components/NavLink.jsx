import React from "react";
import { Link } from "react-router-dom";

const NavLink = ({linkTitle,link}) => {
  return (
    <Link className="nav-link" key={linkTitle} to={link}>
      {linkTitle}
    </Link>
  );
};

export default NavLink;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const NavFontAwesome = (props) => {
  const { icon, link, linkTitle } = props;
  return (
    <li className="nav-item">
      <Link className="nav-link d-flex align-items-center" to={link}>
        <i className="mr-1 me-2 text-gray">
          <FontAwesomeIcon icon={icon} /> 
        </i>
        { linkTitle }
        {linkTitle === "Cart" && <small className="text-gray ms-1"> </small>}
      </Link>
    </li>
  );
};

export default  NavFontAwesome;

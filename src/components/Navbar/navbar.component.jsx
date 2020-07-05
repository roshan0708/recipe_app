import React from "react";
import "./navbar.styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faPinterest, faDribbble } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
    return (
      <nav className="sticky-nav">
        <h3 className="brand-name">Eatify</h3>
        <ul class="main-nav">
          <li>
            <FontAwesomeIcon icon={faFacebook} />
          </li>
          <li>
            <FontAwesomeIcon icon={faInstagram} />
          </li>
          <li>
            <FontAwesomeIcon icon={faPinterest} />
          </li>
          <li>
            <FontAwesomeIcon icon={faDribbble} />
          </li>
        </ul>
      </nav>
    );
}

export default Navbar;
import React from "react";
import "./cover.styles.css";
import CoverText from "../Cover-Text/cover-text.component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown } from "@fortawesome/free-solid-svg-icons";

const Cover = () => {
    return (
      <div className="cover">
        <CoverText />
        <FontAwesomeIcon
          onClick={() =>
            document.getElementById("search-card").scrollIntoView({
              behavior: "smooth",
            })
          }
          icon={faChevronCircleDown}
          className="arrow-down"
        />
      </div>
    );
}

export default Cover;
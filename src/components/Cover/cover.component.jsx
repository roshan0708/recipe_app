import React from "react";
import "./cover.styles.css";
import BgImg from "../../assets/img/bg-2.jpg";
import CoverText from "../Cover-Text/cover-text.component";

const Cover = () => {
    return (
        <div className="cover">
            <img src={BgImg} className="cover-img" alt="" />
            <CoverText/>
        </div>
    );
}

export default Cover;
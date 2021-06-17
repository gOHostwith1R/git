import React from "react";

import './footer.css';

import LeftArrow from '../../images/Rectangle(Stroke).png';
import RightArrow from '../../images/Rectangle.png';

const Footer = () => {
    return (
        <div className={"footer"}>
            <p className={"list-pages"}>5-8 of 249 items</p>
            <div className={"pagination"}>
                <a className={"left-arrow"} href={"/#"}>
                    <img src={LeftArrow} alt={"left-arrow__image"}/>
                </a>
                <a href={"/#"}>1</a>
                <a href={"/#"} className={"active"}>2</a>
                <a href={"/#"}>3</a>
                <a href={"/#"}>...</a>
                <a href={"/#"}>10</a>
                <a className={"right-arrow"} href={"/#"}>
                    <img src={RightArrow} alt={"right-arrow__image"}/>
                </a>
            </div>
        </div>
    );
}

export default Footer;
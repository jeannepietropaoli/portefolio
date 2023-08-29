import React from "react";
import homeLogo from "../assets/home.png";
import arrow from "../assets/arrow-logo.png";
import MenuItem from "./MenuItem";
import "../styles/Navbar.css";

export default function Navbar(props) {
    const menuItems = ["Home", "About", "TechStack", "Projects", "Contact"]
    const [foldMenu, setFoldMenu] = React.useState(true);

    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const menuItemsElements = menuItems.map(item => <MenuItem scrollToTop={scrollToTop} itemName={item} />)

    return (
        <div className={`navbar ${props.isShown ? "" : "hidden"} ${window.scrollY > 0 ? "shadow" : ""}`}>
            <img src={homeLogo} alt="home link" />
            <button onClick={() => setFoldMenu(prevState => !prevState)} className={`mobile-menu-btn ${foldMenu ? "" : "unfold"}`}>
                <div className="arrow-container">
                    <img src={arrow} />
                </div>
                </button>
            <ul className={`navbar-list ${foldMenu ? "hidden" : ""}`}>{menuItemsElements}</ul>
        </div>
    )
}
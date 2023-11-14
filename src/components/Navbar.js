import React from "react";
import MenuItem from "./MenuItem";
import "../styles/Navbar.css";
import PixelBackground from "./PixelBackground";

export default function Navbar(props) {
    const menuItems = props.sections;
    const [menuHidden, setMenuHidden] = React.useState(true);

    function toggleMenu() {
        setMenuHidden(prevState => !prevState)
    }

    const menuItemsElements = menuItems.map((item, index) => {
        return <MenuItem key={index} itemName={item} current={props.currentSection === item} closeMenu={() => setMenuHidden(true)} />
    })

    return (
        <nav>
            {menuHidden && 
                <button onClick={() => setMenuHidden(false)}>
                    <span className="menu--dot"></span>
                    <span className="menu--dot"></span>
                    <span className="menu--dot"></span>
                </button>
            }
            {!menuHidden && <>
                <PixelBackground />
                <button onClick={() => setMenuHidden(true)} id="close-menu">X</button>
                <ul className="full-page navbar-list">{menuItemsElements}</ul>
                </>
            }
            <ul className={`navbar-list`}>{menuItemsElements}</ul>
        </nav>
    )
}
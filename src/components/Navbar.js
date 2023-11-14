import React from "react";
import MenuItem from "./MenuItem";
import "../styles/Navbar.css";
import PixelBackground from "./PixelBackground";

export default function Navbar(props) {
    const menuItems = props.sections;
    const [menuHidden, setMenuHidden] = React.useState(true);

    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleMenu() {
        setMenuHidden(prevState => !prevState)
    }

    const menuItemsElements = menuItems.map(item => {
        return <MenuItem scrollToTop={scrollToTop} itemName={item} current={props.currentSection === item} />
    })

    return (
        <navbar>
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
        </navbar>
    )
}
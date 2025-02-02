import React from "react";
import "../styles/MenuItem.css";

export default function MenuItem(props) {
    const [anchor, setAnchor] = React.useState(null);

    React.useEffect(() => {
        setAnchor(document.getElementById(props.itemName));
    }, [])

    function scrollToTop(e) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function handleClick(e) {
        e.preventDefault();
        props.itemName === "Home" ?
            scrollToTop(e) :
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
        props.closeMenu();
    }

    return (
            <li className={`menu-item ${props.current ? "current" : ""}`}>
                <a 
                    href={`#${props.itemName}`}
                    onClick={handleClick}
                    aria-label={`Scroll to ${props.itemName}`}
                >
                    {`${props.itemDisplayName}`}
                </a>
            </li>
    )
}
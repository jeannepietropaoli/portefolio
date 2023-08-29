import React from "react";
import "../styles/MenuItem.css";

export default function MenuItem(props) {
    const [anchor, setAnchor] = React.useState(null);

    React.useEffect(() => {
        setAnchor(document.getElementById(props.itemName));
    }, [])

    function handleClick(e) {
        e.preventDefault();
        props.itemName === "Home" ?
            props.scrollToTop(e) :
            anchor.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className="menu-item">
            <li>
                <a 
                    href={`#${props.itemName}`}
                    onClick={handleClick}
                    ariaLabel={`Scroll to ${props.itemName}`}
                >
                    <span className="brackets">{"<"}</span>
                    {`${props.itemName}`}
                    <span className="brackets">{" />"}</span>
                </a>
            </li>
        </div>
    )
}
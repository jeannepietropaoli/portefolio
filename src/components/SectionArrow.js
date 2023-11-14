import React from "react";
import downArrowWhite from "../assets/down-arrow-white.png";
import downArrowGrey from "../assets/down-arrow-grey.png";
import upArrowWhite from "../assets/up-arrow-white.png";
import upArrowGrey from "../assets/up-arrow-grey.png";
import "../styles/SectionArrow.css";

export default function SectionArrow(props) {
    function goToPreviousSection(previousSectionRef) {
        const previousSection = previousSectionRef.current;
        previousSection.scrollIntoView({behavior: "smooth"});
      }
    
      function goToNextSection(nextSectionRef) {
        const nextSection = nextSectionRef.current;
        nextSection.scrollIntoView({behavior: "smooth"});
      }

    return (
        <div className="arrow-btn-container">
            {
            props.previousSectionRef && 
                <button className="previous arrow-btn" onClick={() => goToPreviousSection(props.previousSectionRef)}>
                    <div className="arrows-container">
                        <img className="up-arrow-img" src={props.color==="grey" ? upArrowGrey : upArrowWhite}/>
                        <img className="up-arrow-img" src={props.color==="grey" ? upArrowGrey : upArrowWhite}/>
                    </div>
                </button>
            }
            {
                props.nextSectionRef && 
                    <button className="next arrow-btn" onClick={() => goToNextSection(props.nextSectionRef)}>
                        <div className="arrows-container">
                            <img className="down-arrow-img" src={props.color==="grey" ? downArrowGrey : downArrowWhite}/>
                            <img className="down-arrow-img" src={props.color==="grey" ? downArrowGrey : downArrowWhite}/>
                        </div>
                    </button>
            }
        </div>
    )
}
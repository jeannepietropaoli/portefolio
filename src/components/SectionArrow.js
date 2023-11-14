import React from "react";
import downArrow from "../assets/down-arrow.png";
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
                    <div class="arrows-container">
                        <img className="up-arrow-img" src={downArrow}/>
                        <img className="up-arrow-img" src={downArrow}/>
                    </div>
                </button>
            }
            {
                props.nextSectionRef && 
                    <button className="next arrow-btn" onClick={() => goToNextSection(props.nextSectionRef)}>
                        <div class="arrows-container">
                            <img className="down-arrow-img" src={downArrow}/>
                            <img className="down-arrow-img" src={downArrow}/>
                        </div>
                    </button>
            }
        </div>
    )
}
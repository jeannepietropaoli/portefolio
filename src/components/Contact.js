import React from "react";
import "../styles/Contact.css";
import "../styles/Section.css"
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import contactBackground from "../assets/color-background.jpg";
import ContactForm from "./ContactForm";
import SectionArrow from "./SectionArrow";

export default function Contact(props) {
    return (
        <section ref={props.reference} id="contact" style={{"--scroll-percentage": props.scrollPercentage}}>
            <div class="section-navigation-container">
                <SectionArrow previousSectionRef={props.previousSectionRef} color="white" />
                <span className="section-number">05</span>
            </div>
            <img className="contact--background-img" src={contactBackground}/>
            <h2 className="section-title">Contact</h2>
            <div class="contact--main">
                <div class="contact--content">
                    <p>That's already it, or is it really ?</p>
                    <p>My inbox is always open : you can reach out for any question or opportunity !</p>
                    <div class="social-networks-container">
                        <p>You can also spy a little more on there :</p>
                        <div className="social-networks-icons">
                            <a target="blank" href="https://github.com/jeannepietropaoli">
                                <img src={githubIcon}/>
                            </a>
                            <a target="blank" href="https://www.linkedin.com/in/jeanne-pietropaoli-649398280/">
                                <img src={linkedinIcon}/>
                            </a>
                        </div>
                    </div>
                </div>
                <ContactForm/>
            </div>
        </section>
    )
}
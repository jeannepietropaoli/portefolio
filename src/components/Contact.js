import React from "react";
import "../styles/Contact.css";
import "../styles/Section.css"
import githubIcon from "../assets/github.png";
import linkedinIcon from "../assets/linkedin.png";
import contactBackground from "../assets/color-background.jpg";
import ContactForm from "./ContactForm";
import SectionArrow from "./SectionArrow";
import { useTranslation } from "react-i18next";

export default function Contact(props) {
    const { t } = useTranslation('contact');

    return (
        <section ref={props.reference} id="contact" style={{"--scroll-percentage": props.scrollPercentage}}>
            <div className="section-navigation-container">
                <SectionArrow previousSectionRef={props.previousSectionRef} color="white" />
                <span className="section-number">05</span>
            </div>
            <img className="contact--background-img" src={contactBackground}/>
            <h2 className="section-title">{t("title")}</h2>
            <div className="contact--main">
                <div className="contact--content">
                    <p>{t("part1")}</p>
                    <p>{t("part2")}</p>
                    <div className="social-networks-container">
                    <p>{t("part3")}</p>
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
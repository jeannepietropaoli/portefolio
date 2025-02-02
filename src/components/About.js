import React from "react";
import "../styles/About.css";
import portrait from "../assets/profile-illustration-guitar.jpg";
import "../styles/Section.css";
import SectionArrow from "./SectionArrow";
import { useTranslation } from "react-i18next";

export default function About(props) {
    const { t } = useTranslation('about');

    return (
        <section ref={props.reference} id="about" style={{"--scroll-percentage": props.scrollPercentage}}>
            <div className="section-navigation-container">
                <SectionArrow previousSectionRef={props.previousSectionRef} nextSectionRef={props.nextSectionRef} color="grey" />
                <span className="section-number">02</span>
            </div>
            <div className="about--text">
            <h2 className="section-title">{t('title')}</h2>
                <div className="about--text-main">
                    <p>{t('description.part1')}</p>
                    <p>{t('description.part2')}</p>
                    <p>{t('description.part3')}</p>
                    <p>{t('description.part4')}</p>
                    <p>{t('description.part5')}</p>
                </div>
            </div>
            <div className="about--img-container">
                <img className="about--img" src={portrait} />
            </div>
        </section>
    )
}
import '../styles/App.css';
import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import Contact from './Contact';
import useSectionScrollPercentage from './useSectionScrollPercentage';
import { useTranslation } from 'react-i18next';

// in navbar integrate pourcentage to track advancement


function App() {
  const [scrollY, setScrollY] = React.useState(window.scrollY);

  const { t } = useTranslation("navbar");

  const aboutSectionRef = React.useRef(null);
  const contactSectionRef = React.useRef(null);
  const homeSectionRef = React.useRef(null);
  const techStackSectionRef = React.useRef(null);
  const projectsSectionRef = React.useRef(null);
  const sectionsInfos = [
    {name : "home", displayName: t("home"), ref : homeSectionRef, scrollPercentage : useSectionScrollPercentage(homeSectionRef)},
    {name : "about", displayName: t("about"), ref : aboutSectionRef, scrollPercentage : useSectionScrollPercentage(aboutSectionRef)},
    {name : "techStack", displayName: t("techStack"), ref : techStackSectionRef, scrollPercentage : useSectionScrollPercentage(techStackSectionRef)},
    {name : "projects", displayName: t("projects"), ref : projectsSectionRef, scrollPercentage : useSectionScrollPercentage(projectsSectionRef)},
    {name : "contact", displayName: t("contact"), ref : contactSectionRef, scrollPercentage : useSectionScrollPercentage(contactSectionRef)}
  ]
  // const sections = Object.keys(sectionsInfos)
  const [currentSection, setCurrentSection] = React.useState(getCurrentSection());

  React.useEffect(() => {
    window.addEventListener('scroll', setScrollY(window.scrollY));
    return () => window.removeEventListener('scroll', setScrollY(window.scrollY));
  })

  React.useEffect(() => {
      setCurrentSection(getCurrentSection());
  }, [scrollY])

  function getCurrentSection() {
    const section = sectionsInfos.findLast(section => section.scrollPercentage >= 0.7)
    return section ? section.name : "home";
  }

  function calcullateMainScale() {
    const contactSection = sectionsInfos.find(section => section.name === 'contact');
    const contactSectionScrollPercentage = contactSection.scrollPercentage;
    return contactSectionScrollPercentage >= 0.4
      ?(1 - ((0.45-0.15)*0.6))
      : 1
  }

  function findSection(sectionName) {
    return sectionsInfos.find(section => section.name === sectionName);
  }

  return (
    <div className="app">
      <Navbar 
        sections={sectionsInfos} 
        currentSection={currentSection} 
      />
      <Home 
        reference={homeSectionRef} 
        nextSectionRef={aboutSectionRef} 
      />
      <main style={{transform: `scale(${calcullateMainScale()})`}}>
        <About 
          reference={aboutSectionRef} 
          scrollPercentage={findSection("about").scrollPercentage} 
          previousSectionRef={homeSectionRef}
          nextSectionRef={techStackSectionRef} 
        />
        <TechStack 
          reference={techStackSectionRef} 
          scrollPercentage={findSection("techStack").scrollPercentage} 
          previousSectionRef={aboutSectionRef}
          nextSectionRef={projectsSectionRef} 
        />
        <Projects 
          reference={projectsSectionRef} 
          scrollPercentage={findSection("projects").scrollPercentage}
          previousSectionRef={techStackSectionRef}
          nextSectionRef={contactSectionRef} 
        />
      </main>
      <Contact 
        reference={contactSectionRef} 
        scrollPercentage={findSection("contact").scrollPercentage} 
        previousSectionRef={homeSectionRef}
      />
    </div>
  );
}

export default App;

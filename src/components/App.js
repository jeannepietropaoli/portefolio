import '../styles/App.css';
import React from 'react';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import TechStack from './TechStack';
import Projects from './Projects';
import Contact from './Contact';
import useSectionScrollPercentage from './useSectionScrollPercentage';

function App() {
  const [scrollY, setScrollY] = React.useState(window.scrollY);
  const aboutSectionRef = React.useRef(null);
  const contactSectionRef = React.useRef(null);
  const homeSectionRef = React.useRef(null);
  const techStackSectionRef = React.useRef(null);
  const projectsSectionRef = React.useRef(null);
  const sectionsInfos = {
    home : {name : "home", ref : homeSectionRef, scrollPercentage : useSectionScrollPercentage(homeSectionRef)},
    about : {name : "about", ref : aboutSectionRef, scrollPercentage : useSectionScrollPercentage(aboutSectionRef)},
    techStack : {name : "techStack", ref : techStackSectionRef, scrollPercentage : useSectionScrollPercentage(techStackSectionRef)},
    projects : {name : "projects", ref : projectsSectionRef, scrollPercentage : useSectionScrollPercentage(projectsSectionRef)},
    contact : {name : "contact", ref : contactSectionRef, scrollPercentage : useSectionScrollPercentage(contactSectionRef)}
  }
  const sections = Object.keys(sectionsInfos)
  const [currentSection, setCurrentSection] = React.useState(getCurrentSection());

  React.useEffect(() => {
    window.addEventListener('scroll', setScrollY(window.scrollY));
    return () => window.removeEventListener('scroll', setScrollY(window.scrollY));
  })

  React.useEffect(() => {
      setCurrentSection(getCurrentSection());
  }, [scrollY])

  function getCurrentSection() {
    const sectionInfosKeys = Object.keys(sectionsInfos);
    return sectionInfosKeys.findLast(key => sectionsInfos[key].scrollPercentage >= 0.7) || "home";
  }

  function calcullateMainScale() {
    const contactScrollPercentage = sectionsInfos.contact.scrollPercentage;
    return contactScrollPercentage >= 0.4
      ?(1 - ((0.45-0.15)*0.6))
      : 1
  }

  return (
    <div className="app">
      <Navbar 
        sections={sections} 
        currentSection={currentSection} 
      />
      <Home 
        reference={homeSectionRef} 
        nextSectionRef={aboutSectionRef} 
      />
      <main style={{transform: `scale(${calcullateMainScale()})`}}>
        <About 
          reference={aboutSectionRef} 
          scrollPercentage={sectionsInfos.about.scrollPercentage} 
          previousSectionRef={homeSectionRef}
          nextSectionRef={techStackSectionRef} 
        />
        <TechStack 
          reference={techStackSectionRef} 
          scrollPercentage={sectionsInfos.techStack.scrollPercentage} 
          previousSectionRef={aboutSectionRef}
          nextSectionRef={projectsSectionRef} 
        />
        <Projects 
          reference={projectsSectionRef} 
          scrollPercentage={sectionsInfos.projects.scrollPercentage}
          previousSectionRef={techStackSectionRef}
          nextSectionRef={contactSectionRef} 
        />
      </main>
      <Contact 
        reference={contactSectionRef} 
        scrollPercentage={sectionsInfos.contact.scrollPercentage} 
        previousSectionRef={projectsSectionRef}
      />
    </div>
  );
}

export default App;

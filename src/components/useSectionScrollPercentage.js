import React from 'react';

const useSectionScrollPercentage = (sectionRef) => {
    const [sectionScrollPercentage, setSectionScrollPercentage] = React.useState(0);

    React.useEffect(() => {
      function handleScroll() {
        if(sectionRef !== null) {
          const section = sectionRef.current;
          const viewportHeight = window.innerHeight;
          const sectionTop = section.getBoundingClientRect().top;
          setSectionScrollPercentage(() => {
            const scrollPercentage = ((viewportHeight - sectionTop) / viewportHeight); 
            return scrollPercentage < 0 
              ? 0 
              : scrollPercentage > 1 
                ? 1 
                : scrollPercentage;
          })
        }
      }
      
      window.addEventListener("scroll", handleScroll);

      return () => window.removeEventListener("scroll", handleScroll);

    }, [sectionRef])

    return sectionScrollPercentage;
}

export default useSectionScrollPercentage;
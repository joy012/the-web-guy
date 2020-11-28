import React, { useState, useEffect, createContext } from 'react';
import Home from './components/Home/Home';
import Project from './components/Project/Project';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import { homeData, aboutData, projectsData, contactData, footerData } from './mock/data';
import NavBar from './components/NavBar/NavBar';
import Blog from './components/Blog/Blog';
import ParticlesContainer from './components/ParticlesContainer/ParticlesContainer';

export const PortfolioContext = createContext();

function App() {
  const [home, setHome] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHome({ ...homeData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioContext.Provider value={{ home, about, projects, contact, footer }}>
      <ParticlesContainer />
      <NavBar />
      <Home />
      <Project />
      <Blog />
      <About />
      <Contact />
    </PortfolioContext.Provider>
  );
}

export default App;

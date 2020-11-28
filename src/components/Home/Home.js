import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import Typical from 'react-typical';
import { PortfolioContext } from '../../App';
import myImg from '../../images/profile.jpg';
import ContactForm from '../Contact/ContactForm';
import './Home.css';

const Home = () => {
  const { home, footer } = useContext(PortfolioContext);
  const { name, cta } = home;
  const { networks } = footer;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 767) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }


  return (
    <section id="home" className="container zIndex">
      <Container>
        <Bounce right={isDesktop} top={isMobile} duration={2000} delay={250}>
          <img className="d-block mx-auto my-4 my-img rounded-circle" src={myImg} alt="" />
        </Bounce>
        <Bounce left={isDesktop} bottom={isMobile} duration={2000} delay={500}>
          <h2 className="text-center display-4 mb-3">
            <span className="primary-color font-weight-bold">{name}</span>
          </h2>
          <Typical
            className="text-white text-center h3 mb-3"
            steps={['Front End Developer', 3500, 'Programmer', 3500, 'Engineering Student', 3500]}
            loop={Infinity}
            wrapper="p"
          />
        </Bounce>
        <Bounce right={isDesktop} bottom={isMobile} duration={2000} delay={750}>
          <div className="text-center mt-4">
            {networks &&
              networks.map((network) => {
                const { id, iconName, url } = network;
                return (
                  <a
                    className='mx-3'
                    key={id}
                    href={url}
                    rel="noopener noreferrer"
                    target="_blank"
                    aria-label={iconName}
                  >
                    <i
                      className={`icon fa fa-${iconName} fa-inverse rounded-circle`}
                    />
                  </a>
                );
              })}
          </div>
        </Bounce>
        <div className='d-flex flex-row justify-content-center align-items-center'>
          <Bounce left={isDesktop} bottom={isMobile} duration={2000} delay={1000}>
            <a
              className='d-inline-block mx-3 btn button my-4 px-4 py-2'
              target="_blank"
              href="https://drive.google.com/file/d/1E7M5WalMdJljc_rj_Ojl0dmvfxj7I338/view?usp=sharing"
            >
              {cta}
            </a>
          </Bounce>

          <Bounce right={isDesktop} bottom={isMobile} duration={2000} delay={1250}>
            <button onClick={openModal} className="d-inline-block btn button my-4 py-2">Send Message</button>
            <ContactForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
          </Bounce>
        </div>
      </Container>
    </section >
  );
};

export default Home;

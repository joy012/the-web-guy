import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import img from '../../images/aboutImg.jpg';
import { PortfolioContext } from '../../App';
import './About.css';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { paragraphOne, paragraphTwo, linkedin } = about;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="about">
      <Container>
        <h2 className="text-center display-3 my-5 font-weight-bold text-white">About</h2>
        <Row>
          <Col md={6} sm={12} className='mb-3'>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div>
                <img className="myImg rounded img-fluid d-block mx-auto" src={img} alt="" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="text-white">
                <p className="lead">{paragraphOne}</p>
                <p className="lead">{paragraphTwo}</p>
                {linkedin && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      href={linkedin}
                    >
                      <Fade
                        left={isDesktop}
                        bottom={isMobile}
                        duration={2000}
                        delay={500}
                        distance="30px"
                      >
                        <button className="d-inline-block btn button my-4 px-4 py-2">Hire Me</button>
                      </Fade>
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;

import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import img1 from '../../images/project1.jpg';
import img2 from '../../images/project2.jpg';
import img3 from '../../images/project3.jpg';
import img4 from '../../images/project4.jpg';
import img5 from '../../images/project5.jpg';
import './Project.css';
import { PortfolioContext } from '../../App';

const allImg = [img1, img2, img3, img4, img5];

const Project = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="projects" className='zIndex'>
      <Container>
        <div className="project-wrapper">
          <h2 className="text-center display-3 mt-5 mb-3 py-5 font-weight-bold text-white">Projects</h2>
          {projects.map((project, index) => {
            const { title, info, info2, url, repo } = project;

            return (
              <Row className="d-flex flex-lg-row flex-column-reverse">
                <Col lg={5} sm={12} className='my-4'>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={2000}
                    delay={500}
                    distance="30px"
                  >
                    <h3 className="text-white">{title}</h3>
                    <div>
                      <p className="text-white lead">{info}</p>
                      <p className="mb-4">
                        {info2.map((btnInfo) => (
                          <span className="btn-skill btn btn-info my-2 mx-2">{btnInfo}</span>
                        ))}
                      </p>
                    </div>
                    <a
                      target="_blank"
                      href={url}
                    >
                      <Fade
                        left={isDesktop}
                        bottom={isMobile}
                        duration={2000}
                        delay={500}
                        distance="30px"
                      >
                        <button className="d-inline-block btn button my-3 mx-3 px-4 py-2">Website</button>
                      </Fade>
                    </a>

                    {repo && (
                      <a
                        target="_blank"
                        href={repo}
                      >
                        <Fade
                          left={isDesktop}
                          bottom={isMobile}
                          duration={2000}
                          delay={500}
                          distance="30px"
                        >
                          <button className="d-inline-block btn button my-3 px-4 py-2">GitHub</button>
                        </Fade>
                      </a>
                    )}
                  </Fade>
                </Col>
                <Col lg={7} sm={12} className='my-4'>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div>
                      <div data-tilt className="thumbnail rounded">
                        <img className="rounded w-100" src={allImg[index]} alt="" />
                      </div>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
export default Project;

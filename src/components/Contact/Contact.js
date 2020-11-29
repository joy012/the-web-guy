import React, { useContext, useState } from 'react';
import { Container } from 'react-bootstrap';
import Bounce from 'react-reveal/Bounce';
import './Contact.css';
import { PortfolioContext } from '../../App';
import ContactForm from './ContactForm';


const Contact = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  const [modalIsOpen, setIsOpen] = useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <section id="contact" className='mt-5 pt-5'>
      <Container>
        <h1 className="display-4 text-center text-white">Get In Touch</h1>
        <Bounce right duration={1500} delay={500}>
          <button onClick={openModal} className="d-block mx-auto btn button my-3 py-2">Send Message</button>
          <ContactForm modalIsOpen={modalIsOpen} closeModal={closeModal} />
        </Bounce>
        <section className="footer mt-4 mb-0 pb=0">
          <Bounce left duration={1500} delay={500}>
            <div className="text-center mt-3">
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
          <p className="text-center mt-3 mb-1">
            <a
              href="https://drive.google.com/file/d/1XZh02RChE1sY9OxvMjW7tHAedjNXi0vr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className='h5 text-white'>&copy; The Web GuY - {new Date().getFullYear()}</span>
            </a>
          </p>
        </section>
      </Container>
    </section>
  );
};

export default Contact;

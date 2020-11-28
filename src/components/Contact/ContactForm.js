import React, { useState } from 'react';
import emailjs, { init } from 'emailjs-com';
import Modal from 'react-modal';
init('user_541YLqgHK4Edya8LvhMAY');


const screenWidth = (window.innerWidth > 767) ? '50%' : '90%';

const customStyles = {
    content: {
        background:'linear-gradient(135deg, #28313B 0%, #485461 100%)',
        borderRadius: '25px',
        width: screenWidth,
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const ContactForm = ({ modalIsOpen, closeModal }) => {

    const [userInfo, setUserInfo] = useState({
        name: '',
        email: '',
        message: '',
    });


    const handleBlur = (e) => {
        const updateInfo = { ...userInfo };
        updateInfo[e.target.name] = e.target.value;
        setUserInfo(updateInfo);
    };

    const handleSubmit = (e) => {
        emailjs.send('service_y71hx6t', 'template_79dy50q', userInfo).then(
            function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Your Message has sent successfully')
            },
            function (error) {
                console.log('FAILED...', error);
            }
        );
        e.target.reset();
        e.preventDefault();
        closeModal();
    };
    return (
        <section>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h3 className='text-center my-3 text-white'>Send Email</h3>
                <form className='p-md-4' onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            onBlur={handleBlur}
                            type="email"
                            className="form-control"
                            name="email"
                            placeholder="Your email address"
                        />
                    </div>
                    <div className="form-group">
                        <input
                            onBlur={handleBlur}
                            type="text"
                            className="form-control"
                            name="name"
                            placeholder="Your name/ company's name"
                        />
                    </div>
                    <div className="form-group">
                        <textarea
                            onBlur={handleBlur}
                            className="form-control"
                            id="exampleFormControlTextarea1"
                            rows="8"
                            name="message"
                            placeholder="Your message..."
                        />
                    </div>
                    <input type="submit" className="btn btn-success px-5 d-block mx-auto" value="Send" />
                </form>
            </Modal>
        </section>
    );
};

export default ContactForm;
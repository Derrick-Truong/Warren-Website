import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { useState, useEffect } from 'react';
import { useModal } from './Context/modal';


const ContactUs = ({ handleCloseContact }) => {
    const form = useRef(null); // Explicitly initialize useRef with null
    const sendEmail = (e) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_4n7fkjl', 'template_vsfep4y', form.current, '5Gcwc642VGVETsxi-')
                .then(
                    () => {
                        console.log('SUCCESS!');
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    }
                );
        } else {
            console.log('Form reference is undefined.');
        }
    };

    return (
        <>
            <section className='contactForm'>
                <div className='contactFormDiv'>
                    <h1>Contact Us</h1>
                    <form id='contact-form' ref={form} onSubmit={sendEmail}>
                        <label htmlFor='user_name'>Name</label>
                        <input
                            type="text"
                            id="user_name"
                            name="user_name"
                            placeholder="Your name..."
                            required
                        />
                        <label htmlFor="user_email">Email</label>
                        <input
                            type="email"
                            id="user_email"
                            name="user_email"
                            placeholder="example@gmail.com"
                            required
                        />
                        <label htmlFor="message">Message</label>
                        <textarea
                            name="message"
                            id="message"
                            placeholder="Your message..."
                            required
                        ></textarea>
                        <div className='buttonDiv'>
                            <button type="submit" className="submit-btn">
                                Send
                            </button>
                            <button type='button' onClick={handleCloseContact}>
                                Cancel
                            </button>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
};

export default ContactUs;

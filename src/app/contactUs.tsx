import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
    const form = useRef(null); // Explicitly initialize useRef with null

    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (form.current) {
            emailjs
                .sendForm('service_4n7fkjl', 'template_2rtq1s9', form.current, 'YOUR_PUBLIC_KEY')
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

    // <form ref={form} onSubmit={sendEmail}>
    //     <label>Name</label>
    //     <input type="text" name="user_name" required />
    //     <label>Email</label>
    //     <input type="email" name="user_email" required />
    //     <label>Message</label>
    //     <textarea name="message" required />
    //     <input type="submit" value="Send" />
    // </form>
    return (
        <>
         <section className='contactForm'>
            <div>
                <h1>Contact Us</h1>
                <p>
                    In the message section, please provide the following: 
                    1.
                </p>
                <form id='contact-form'>
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
                    placeholder="exampl@gmail.com"
                    required
                    />
                    <label htmlFor="message">Message</label>
                    <textarea
                        name="message"
                        id="message"
                        placeholder="Your message..."
                        required
                    ></textarea>
                    <button type="submit" className="submit-btn">
                        Send
                    </button>
                </form>
            </div>
         </section>
        </>
    );
};

export default ContactUs;

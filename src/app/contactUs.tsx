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
        <section>
            <div className='container'>
                <h2 className='--text-center'>Contact Me</h2>
                <form className='--form-control --card --flex-center --dir-column'>
                    <input type='text' placeholder='Full Name'
                        name='user_name' required />
                    <input type='text' placeholder='Email'
                        name='user_email' required />
                    <textarea name='message' cols={30} rows={10}>
                    </textarea>
                    <button type='submit' className='--btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
        </>
    );
};

export default ContactUs;

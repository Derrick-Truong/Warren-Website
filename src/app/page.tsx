// pages/index.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeadImage from '../assets/Warren_headshot.jpg'; // Adjust the path based on the location of your image
import Algebra from '../assets/algebra.jpg';
import Calculus from '../assets/calculus.jpg';
import Geometry from '../assets/geometry.jpg';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import ContactForm from './contactUs';
import './globals.css';

export default function Home() {
  const [popupImageSrc, setPopupImageSrc] = useState<string | null>(null);
  const [popupContact, setPopupContact] = useState<boolean>(false);
  const [popupSuccess, setPopupSuccess] = useState<boolean>(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [faqActive, setFaqActive] = useState(false);
  const [faqActive1, setFaqActive1] = useState(false);
  const [faqActive2, setFaqActive2] = useState(false);
  const [faqActive3, setFaqActive3] = useState(false);
  const [faqActive4, setFaqActive4] = useState(false);
  const [faqActive5, setFaqActive5] = useState(false);

  const toggleClass = () => {
    setFaqActive(!faqActive)
  }

  const toggleClass1 = () => {
    setFaqActive1(!faqActive1)
  }

  const toggleClass2 = () => {
    setFaqActive2(!faqActive2)
  }
  const toggleClass3 = () => {
    setFaqActive3(!faqActive3)
  }
  const toggleClass4 = () => {
    setFaqActive4(!faqActive4)
  }
  const toggleClass5 = () => {
    setFaqActive5(!faqActive5)
  }

  const handleImageClick = (src: string) => {
    setPopupImageSrc(src);
  };

  const handleClosePopup = () => {
    setPopupImageSrc(null);
  };

  const handleSuccess = () => {
    setPopupContact(false);
    setPopupSuccess(true);
  };

  const handleCloseSuccess = () => {
    setPopupSuccess(false);
  };

  const handleContactFormClick = () => {
    setPopupContact(true);
  };

  const handleCloseContact = () => {
    setPopupContact(false);
  };

  const toggleParagraph = () => {
    setIsExpanded(!isExpanded);
  };

  const truncatedText = "Hello! I am Warren Fernandes, a dedicated mathematics tutor with a deep-rooted passion for teaching. My educational journey began in San Francisco, where I attended Edison Elementary, followed by Ben Franklin Middle School and Jefferson High School in Daly City. I went on to earn my Master’s degree in Mathematics from Cal Poly San Luis Obispo. Since 2000, I have been teaching high school mathematics at a K - 12 school in the East Bay.I have also had the privilege of teaching at Cal State East Bay and the College of San Mateo.Throughout my career, I have been fortunate to achieve a 95 % pass rate among my AP Calculus students on the AP exam. Beyond my professional life, I am a husband and father who loves to travel and maintain an active lifestyle.  My teaching philosophy is centered on making math accessible and enjoyable for all students. I have extensive experience working with students from diverse backgrounds and different learning styles";
  const fullText = "Hello! I am Warren Fernandes, a dedicated mathematics tutor with a deep-rooted passion for teaching. My educational journey began in San Francisco, where I attended Edison Elementary, followed by Ben Franklin Middle School and Jefferson High School in Daly City. I went on to earn my Master’s degree in Mathematics from Cal Poly San Luis Obispo. Since 2000, I have been teaching high school mathematics at a K-12 school in the East Bay. I have also had the privilege of teaching at Cal State East Bay and the College of San Mateo. Throughout my career, I have been fortunate to achieve a 95% pass rate among my AP Calculus students on the AP exam. Beyond my professional life, I am a husband and father who loves to travel and maintain an active lifestyle. My teaching philosophy is centered on making math accessible and enjoyable for all students. I have extensive experience working with students from diverse backgrounds and different learning styles, and I am passionate about helping each student reach their full potential. I am available to tutor Algebra 1 through AP Calculus, as well as standardized tests such as the ACT and SAT I/II. Whether you're struggling with basic concepts or aiming to master advanced topics, I am here to provide personalized guidance and support to help you succeed.";

  const businessHours = [
    {
      daysOfWeek: [1, 2, 3, 4], // Monday - Thursday
      startTime: '10:00', // a start time (10am in this example)
      endTime: '18:00', // an end time (6pm in this example)
    }
  ];

  return (
    <>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            Home
            {/* <Link href="/">Home</Link> */}
          </li>
          <li className="navItem">
            {/* <Link href="/about">About</Link> */}
          </li>
          <li className="navItem">
            {/* <Link href="/contact">FAQ</Link> */}
          </li>
        </ul>
      </nav>
      <main className={`main-content ${popupImageSrc ? 'blur-background' : ''}`}>
        <div className="aboutMe">
          <Image alt="Head" src={HeadImage} className="head" />
          <div className="authorBody">
            <div className="authorTitle">
              <h1 className="authorName">Warren Fernandes</h1>
              <div className="topicsOuter">
                <div className="topics">Algebra</div>
                <div className="topics">Geometry</div>
                <div className="topics">PreCalculus</div>
                <div className="topics">Calculus</div>
              </div>
            </div>
            <h2 className="jobTitle">Mathematics Tutor</h2>
            <div className="outerDescription">
              <p className="description">
                {isExpanded ? fullText : truncatedText}
                {!isExpanded && (
                  <span className="expandText" onClick={toggleParagraph}>
                    ...more
                  </span>
                )}
              </p>
            </div>
          </div>
          <div className='calendarOuter'>
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView={'dayGridMonth'}
              customButtons={{
                myCustomButton: {
                  text: 'Availability'
                }
              }}
              headerToolbar={{
                start: 'myCustomButton',
                center: 'title',
                end: 'prev,next',
              }}
              businessHours={businessHours}
              height='45vh'
            />
            <div>
              <button onClick={handleContactFormClick} className='contactUsOuter'>
                Contact Me
              </button>
            </div>
          </div>
        </div>
        <div className="studyGuidesOuter">
          <h2 className="studyGuidesTitle">Sample Study Guides</h2>
          <div className="studyGuides">
            <div className="studyPic" onClick={() => handleImageClick(Algebra.src)}>
              <Image src={Algebra} alt="Algebra" className="studyImage" />
              <div className='studyPicTitles'>Algebra</div>
            </div>
            <div className="studyPic" onClick={() => handleImageClick(Geometry.src)}>
              <Image src={Geometry} alt="Geometry" className="studyImage" />
              <div className='studyPicTitles2'>Geometry</div>
            </div>
            <div className="studyPic" onClick={() => handleImageClick(Calculus.src)}>
              <Image src={Calculus} alt="Calculus" className="studyImage" />
              <div className='studyPicTitles3'>Calculus</div>
            </div>
          </div>
        </div>
        <section className='faqSection'>
          <h2 className="studyGuidesTitle">Frequently Asked Questions</h2>
          <div className={faqActive ? 'faqActive' : 'faq'} onClick={toggleClass}>
            <div className='question'>
              <h3>What subjects do you tutor?</h3>
              <svg className='path' width='15' height='10' viewBox='0 0 42 25'>
                <path d='M3 3L21 21L39 3' stroke='white' strokeWidth='7' strokeLinecap='round' />
              </svg>
            </div>
            <div className='answer'>
              <p>
                I offer tutoring in a wide range of mathematics subjects, including Algebra 1, Algebra 2, Geometry, Precalculus, Calculus (including AP Calculus), and preparation for standardized tests such as the SAT, ACT, and SAT Subject Tests in Mathematics.
              </p>
            </div>
          </div>
          <div className={faqActive1 ? 'faqActive' : 'faq'} onClick={toggleClass1}>
            <div className='question'>
              <h3>How are tutoring sessions conducted?</h3>
              <svg className='path' width='15' height='10' viewBox='0 0 42 25'>
                <path d='M3 3L21 21L39 3' stroke='white' strokeWidth='7' strokeLinecap='round' />
              </svg>
            </div>
            <div className='answer'>
              <p>
                Tutoring sessions can be conducted either in person or via ZOOM, depending on your preference. I aim to provide a flexible and convenient learning environment to meet your needs.
              </p>
            </div>
          </div>
          <div className={faqActive2 ? 'faqActive' : 'faq'} onClick={toggleClass2}>
            <div className='question'>
              <h3>What are your qualifications?</h3>
              <svg className='path' width='15' height='10' viewBox='0 0 42 25'>
                <path d='M3 3L21 21L39 3' stroke='white' strokeWidth='7' strokeLinecap='round' />
              </svg>
            </div>
            <div className='answer'>
              <p>
                I hold a Masters degree in Mathematics from Cal Poly San Luis Obispo. I have been teaching high school mathematics since 2000 and have also taught at Cal State East Bay and the College of San Mateo. I have extensive experience working with students from diverse backgrounds and different learning styles.
              </p>
            </div>
          </div>
          <div className={faqActive3 ? 'faqActive' : 'faq'} onClick={toggleClass3}>
            <div className='question'>
              <h3>How much do you charge for tutoring sessions?</h3>
              <svg className='path' width='15' height='10' viewBox='0 0 42 25'>
                <path d='M3 3L21 21L39 3' stroke='white' strokeWidth='7' strokeLinecap='round' />
              </svg>
            </div>
            <div className='answer'>
              <p>
                My tutoring rates vary depending on the subject and level of difficulty. Please contact me directly to discuss pricing and to schedule a session.
              </p>
            </div>
          </div>
          <div className={faqActive4 ? 'faqActive' : 'faq'} onClick={toggleClass4}>
            <div className='question'>
              <h3>How do I schedule a tutoring session?</h3>
              <svg className='path' width='15' height='10' viewBox='0 0 42 25'>
                <path d='M3 3L21 21L39 3' stroke='white' strokeWidth='7' strokeLinecap='round' />
              </svg>
            </div>
            <div className='answer'>
              <p>
                You can schedule a tutoring session by contacting me through the contact form on the website, sending an email, or calling me directly. I will get back to you as soon as possible to confirm the details.
              </p>
            </div>
          </div>
          <div className={faqActive5 ? 'faqActive' : 'faq'} onClick={toggleClass5}>
            <div className='question'>
              <h3>What is your cancellation policy?</h3>
              <svg className='path' width='15' height='10' viewBox='0 0 42 25'>
                <path d='M3 3L21 21L39 3' stroke='white' strokeWidth='7' strokeLinecap='round' />
              </svg>
            </div>
            <div className='answer'>
              <p>
                I require at least 24 hours notice for cancellations or rescheduling. If you cancel within 24 hours of the scheduled session, a cancellation fee may apply. Please contact me as soon as possible if you need to cancel or reschedule.
              </p>
            </div>
          </div>
        </section>
        {popupImageSrc && (
          <div className="popupImage" onClick={handleClosePopup}>
            <span className="close">&times;</span>
            <Image src={popupImageSrc} alt="Popup Image" width={700} height={700} />
          </div>
        )}
        {popupContact && (
          <div className="popup">
            <ContactForm handleCloseContact={handleCloseContact} handleSuccess={handleSuccess} />
          </div>
        )}
        {popupSuccess && (
          <div className="popup">
            <div className='successFormDiv'>
              <p>Message sent successfully! Please wait for instructor to email you.</p>
              <div className='successFormInner'>
                <button className='successFormButton' onClick={handleCloseSuccess}>Close</button>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
}









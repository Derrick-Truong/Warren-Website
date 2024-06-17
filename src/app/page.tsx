// pages/index.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeadImage from '../assets/Warren_headshot.jpg'; // Adjust the path based on the location of your image
import Algebra from '../assets/algebra.jpg';
import Calculus from '../assets/calculus.jpg';
import Geometry from '../assets/geometry.jpg';

export default function Home() {
  const [popupImageSrc, setPopupImageSrc] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setPopupImageSrc(src);
  };

  const handleClosePopup = () => {
    setPopupImageSrc(null);
  };

  return (
    <>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link href="/">Home</Link>
          </li>
          <li className="navItem">
            <Link href="/about">About</Link>
          </li>
          <li className="navItem">
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
      <main className={`main-content ${popupImageSrc ? 'blur-background' : ''}`}>
        <div className="aboutMe">
          <Image alt="Head" src={HeadImage} className="head" />
          <div className="authorBody">
            <div className="authorTitle">
              <h1 className="authorName">Warren Fernandez</h1>
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
                Hello! I am Warren Fernandez, a dedicated mathematics tutor with a deep-rooted passion for teaching. My educational journey began in San Francisco, where I attended Edison Elementary, followed by Ben Franklin Middle School and Jefferson High School in Daly City. I went on to earn my Master’s degree in Mathematics from Cal Poly San Luis Obispo.

                Since 2000, I have been teaching high school mathematics at a K-12 school in the East Bay. I have also had the privilege of teaching at Cal State East Bay and the College of San Mateo. Throughout my career, I have been fortunate to achieve a 95% pass rate among my AP Calculus students on the AP exam. I have also been honored to serve as a graduation commencement speaker and received a yearbook dedication.

                Beyond my professional life, I am a husband and father who loves to travel and maintain an active lifestyle. My teaching philosophy is centered on making math accessible and enjoyable for all students. I have extensive experience working with students from diverse backgrounds and different learning styles, and I am passionate about helping each student reach their full potential.

                I am available to tutor Algebra 1 through AP Calculus, as well as standardized tests such as the ACT and SAT I/II. Tutoring sessions can be conducted via ZOOM or in person, depending on your preference. Whether you're struggling with basic concepts or aiming to master advanced topics, I am here to provide personalized guidance and support to help you succeed.
              </p>
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
        {popupImageSrc && (
          <div className="popupImage" onClick={handleClosePopup}>
            <span className="close">&times;</span>
            <Image src={popupImageSrc} alt="Popup Image" width={700} height={700} />
          </div>
        )}
      </main>
    </>
  );
}







// pages/index.tsx
import Image from 'next/image';
import Link from 'next/link';
import HeadImage from '../assets/Warren_headshot.jpg'; // Adjust the path based on the location of your image

export default function Home() {
  return (
    <>
      <nav className="navbar">
        <ul className="navList">
          <li className="navItem">
            <Link href="/">
              Home
            </Link>
          </li>
          <li className="navItem">
            <Link href="/about">
              About
            </Link>
          </li>
          <li className="navItem">
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main className="main-content">
        <div className="aboutMe">
          <Image alt="Head" src={HeadImage} className="head" />
          <div className="authorBody">
            <div className="authorTitle">
              <h1 className="authorName">Warren Something</h1>
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
                Hello! I'm Warren Something, a dedicated mathematics tutor with over 10 years of experience helping students achieve their academic goals. I hold a Master's degree in Mathematics from the University of Excellence, where I developed a deep passion for the subject and a keen understanding of various mathematical concepts. My tutoring journey began during my undergraduate years, where I found immense joy in assisting my peers with their math challenges. This passion has only grown stronger over the years.
                My teaching philosophy centers around making math accessible and enjoyable for everyone. I believe that every student has the potential to excel in mathematics with the right guidance and support. I specialize in Algebra, Geometry, Pre-Calculus, and Calculus, offering personalized tutoring sessions tailored to each student's unique learning style. Whether you're struggling with basic concepts or looking to master advanced topics, I'm here to help you build confidence and achieve success in math.
              </p>
            </div>
          </div>
        </div>
        <div className="studyGuidesOuter">
          <h2 className='studyGuides'>Sample Study Guides</h2>
        </div>
      </main>
    </>
  );
}






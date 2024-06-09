import Image from "next/image";
import Link from 'next/link';
import './globals.css';
import Head from "../assets/Warren_headshot.jpg"

export default function Home() {
  return (
    <>
      <nav className='navbar'>
        <ul className='navList'>
          <li className='navItem'>
            <Link href="/">
              Home
            </Link>
          </li>
          <li className='navItem'>
            <Link href="/about">
              About
            </Link>
          </li>
          <li className='navItem'>
            <Link href="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <main className="flex flex-col justify-between p-24">
        <div className='aboutMe'>
          <Image alt="Head" src={Head} className="head"></Image>
          <div className="authorBody">
            <div className="authorTitle">
              <h1 className='authorName'>Warren Something</h1>
              <div className='topicsOuter'>
              <div className='topics'>Algebra</div>
              <div className='topics'>Algebra</div>
              </div>
            </div>
            <h2>context</h2>
          </div>
        </div>
      </main>
    </>

  );
}

import Image from "next/image";
import Link from 'next/link';
import './globals.css';

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
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <nav className='navbar'>
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
      </nav> */}
    </main>
    </>
  );
}

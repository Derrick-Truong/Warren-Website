import Image from "next/image";
import Link from 'next/link';
import './globals.css';

export default function Home() {
  return (
    
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className='navbar'>
        <ul className='navList'>
          <li className='navItem'>
            <Link href="/">
              <a>Hoe</a>
            </Link>
          </li>
          <li className='navItem'>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li className='navItem'>
            <Link href="/contact">
              <a>Contct</a>
            </Link>
          </li>
        </ul>
      </nav>
    </main>
  );
}

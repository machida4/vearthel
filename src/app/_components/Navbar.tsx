import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="flex flex-row w-full items-center py-3 border-b">
      <div>
        <Link href={'/'}>Home</Link>
      </div>
      <nav>
        <ul className="flex flex-row">
          <li>
            <Link href={'/about'}>About</Link>
          </li>
          <li>
            <Link href={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

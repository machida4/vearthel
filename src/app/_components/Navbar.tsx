import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <header className="flex flex-row w-full items-center py-3 border-b">
      <nav>
        <ul className="flex flex-row">
          <li className="mx-2 hover:text-blue-800">
            <Link href={'/'}>Home</Link>
          </li>
          <li className="mx-2 hover:text-blue-800">
            <Link href={'/about'}>About</Link>
          </li>
          <li className="mx-2 hover:text-blue-800">
            <Link href={'/blog'}>Blog</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;

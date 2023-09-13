import Link from 'next/link';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <>
      <Link href={'/'}>Home</Link>
      <Link href={'/about'}>About</Link>
      <Link href={'/blog'}>Blog</Link>
    </>
  );
};

export default Navbar;

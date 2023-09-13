'use client';

import { Header } from '@primer/react';
import Image from 'next/image';
import Icon from 'public/icon.png';
import React from 'react';

const Navbar: React.FC = () => {
  return (
    <Header sx={{ gap: '8px' }}>
      <Header.Item>
        <Header.Link href="/">
          <Image
            src={Icon}
            alt={'icon'}
            width={32}
            height={32}
            style={{
              marginLeft: '2px',
              marginRight: '10px',
            }}
          />
          <span>machida.earth</span>
        </Header.Link>
      </Header.Item>
      <Header.Item>
        <Header.Link
          href="/about"
          style={{
            marginLeft: '2px',
            marginRight: '10px',
          }}
        >
          About
        </Header.Link>
        <Header.Link
          href="/blog"
          style={{
            marginLeft: '2px',
            marginRight: '10px',
          }}
        >
          Blog
        </Header.Link>
      </Header.Item>
    </Header>
  );
};

export default Navbar;

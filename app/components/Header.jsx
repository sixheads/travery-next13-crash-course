import Link from 'next/link';
import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <Link href="/">Traversy Media</Link>
        </div>
        <nav className="links">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/about/team">Team</Link>
          <Link href="/code/repos">Code</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

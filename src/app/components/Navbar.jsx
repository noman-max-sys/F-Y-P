// app/components/Navbar.jsx

'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './Navbar.css';

const Navbar = () => {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src="https://www.proclassconsultants.com/images/logo-img.png" alt="Company Logo" />
        <h1>PRO CLASS CONNECT</h1>
      </div>
      <div className="navbar__buttons">
        <button className="navbar__button" onClick={handleLoginClick}>Login</button>
        <button className="navbar__button">Sign Up</button>
      </div>
    </nav>
  );
};

export default Navbar;

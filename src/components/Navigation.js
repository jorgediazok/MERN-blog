import React from 'react';

const navLinks = [
  {
    title: 'Home',
    path: '/',
  },
  {
    title: 'Blog',
    path: '/blog',
  },
  {
    title: 'Contact Us',
    path: '/contact-us',
  },
  {
    title: 'Login',
    path: '/login',
  },
];

const Navigation = (props) => {
  return (
    <nav className="site-navigation">
      <span>JDW International</span>
      <ul>
        {navLinks.map((link, index) => (
          <li key={index}>{link.title}</li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;

import React from 'react';
import { Link } from 'react-router-dom';
import { Avatar } from 'antd';

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
      <span className="menu-title">JDW International</span>
      <div className="menu-content-container">
        <ul>
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>
        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
      </div>
    </nav>
  );
};

export default Navigation;

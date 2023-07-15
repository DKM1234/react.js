import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="container">
        <p>
          Copyrights: &copy; 2023 All Rights Reserved. ||
          <Link to="/" className='links'> Mindtrail Technologies Pvt Ltd </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;


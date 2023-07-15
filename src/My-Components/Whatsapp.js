import React, { useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';

function Whatsapp() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '+918770059117';
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    window.open(whatsappLink);
  };

const iconStyles = {
    color: 'green',
    transition: 'transform 0.3s',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
    position: 'fixed',
    right: '15px',
    bottom: '15px',
  };
  

  return (
    <div style={{ textAlign: 'end' }}>
      <FaWhatsapp
        size={52}
        onClick={handleWhatsAppClick}
        style={iconStyles}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />&nbsp;&nbsp;&nbsp;
    </div>
  );
}

export default Whatsapp;

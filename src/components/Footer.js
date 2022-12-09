import React from 'react';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer'>
        <FaTwitterSquare size={25} className='footer-icon'/>
        <FaFacebookSquare size={25} className='footer-icon'/>
        <FaInstagramSquare size={25} className='footer-icon'/>
        <FaGithubSquare size={25} className='footer-icon'/>
    </div>
  )
}

export default Footer
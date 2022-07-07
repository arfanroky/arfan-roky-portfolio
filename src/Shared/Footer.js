import React from 'react';
import { FaFacebookSquare, FaLinkedin, FaInstagramSquare, FaTwitter} from 'react-icons/fa';


const Footer = () => {
  const year = new Date().getFullYear();
    return (
        <footer className='p-4 mb-6 border rounded'>
          <div className=' py-12'>
            <ul className="flex gap-x-2 justify-center mb-4">
            <a className='text-3xl
            text-gray-400  hover:text-cyan-500'
              href="https://www.facebook.com/arfan.roky.5"
              target="_blank"
              rel="noreferrer"
            >
                <FaFacebookSquare/>
            </a>
            <a className='text-3xl 
            text-gray-400 hover:text-cyan-500'
              href="https://www.linkedin.com/in/arfan-roky-46a5b023a/"
              target="_blank"
              rel="noreferrer"
            >
                <FaLinkedin/>
            </a>
            <a className='text-3xl 
            text-gray-400 hover:text-cyan-500'
              href="https://twitter.com/ArfanRoky"
              target="_blank"
              rel="noreferrer"
            >
                <FaTwitter/>
            </a>
            <a className='text-3xl
            text-gray-400  hover:text-cyan-500'
              href="https://www.instagram.com/arfan.roky/?hl=en"
              target="_blank"
              rel="noreferrer"
            >
                <FaInstagramSquare/>
            </a>
          </ul>
            <p className='text-center text-cyan-500'>Made By Arfan Roky {year}</p>
        </div>
        </footer>
    );
};

export default Footer;
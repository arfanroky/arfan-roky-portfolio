import React from 'react';
import PortfolioImg from '../images/arfan-roky.png';
import RESUME from '../images/resume.pdf';

import { FaFacebookSquare, FaLinkedin, FaMailBulk , FaDownload, FaInstagramSquare} from 'react-icons/fa';


const HeroPage = () => {
  return (
    <section className="p-4">
      <div className="grid md:grid-cols-2 grid-cols-1 items-center min-h-screen">
        <div className="md:mt-0 mt-12 md:order-1 order-2">
          <h1 className="text-xl font-extrabold text-gray-400 capitalize">
            Hi There,
          </h1>
          <h2 className="text-8xl text-cyan-400 font-extrabold uppercase my-3">
            I'm
          </h2>
          <h3 className="md:text-6xl text-5xl font-bold uppercase text-white ">
            {' '}
            Arfan Roky
          </h3>
   
          <div className="flex mt-4 mb-6 space-x-6">
<a href="https://www.facebook.com/arfan.roky.5/" target="_blank" rel="noopener noreferrer"><FaFacebookSquare className='text-3xl text-gray-400 hover:text-cyan-400' /></a>

           <a href="https://www.linkedin.com/in/arfan-roky-46a5b023a/" target="_blank" rel="noopener noreferrer"><FaLinkedin className='text-3xl text-gray-400 hover:text-cyan-400' /></a>
            
            <a href="https://www.instagram.com/arfan.roky/?hl=en" target="_blank" rel="noopener noreferrer">
            <FaInstagramSquare className='text-3xl text-gray-400 hover:text-cyan-400' />
            </a>

          </div>
          
          <a
            className="py-3 px-6 rounded  text-gray-200 font-bold bg-cyan-600"
            href={RESUME}
            download=" resume.pdf"
          >
            <span>Resume</span>  <FaDownload className='inline-block'/>
          </a>

        </div>
        <div className="flex justify-center md:mt-0 mt-12  md:order-1">
          <img
            className="bg-cyan-400 rounded-tl-full rounded-tr-full border-8 shadow-2xl shadow-cyan-400"
            src={PortfolioImg}
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default HeroPage;

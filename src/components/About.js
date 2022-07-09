import React from 'react';
import PortfolioImg from '../images/arfan-roky.png';
import { FcAbout, FcPhoneAndroid } from 'react-icons/fc';
import { SiGmail } from 'react-icons/si';

const About = () => {
  return (
    <article className="p-4 mt-12 md:h-screen">
      <div className="grid md:grid-cols-2 grid-cols-1  items-center gap-y-12 md:mt-0 ">
          <figure className=" md:h-[500px] h-[420px] relative -z-10">
            <div className='w-[300px] border-l-8 border-b-8 border-l-white border-b-white absolute top-12 left-0 h-full'>
            </div>
            <img  className="border-8 border-r-0 border-t-0 top-6 left-6 shadow-2xl shadow-white absolute md:h-[500px] h-[400px] bg-indigo-400" src={PortfolioImg} alt="" />
          </figure>
        <div className='mt-12'>
          <p className="font-medium text-xl text-gray-400 my-4 border-b-4 border-cyan-300 inline-block">
            About Me <FcAbout className="inline-block" />
          </p>
          <p className="font-bold text-gray-300">
              <SiGmail className="inline-block" /> : arfanroky0@gmail.com
            </p>
            <p className="font-bold text-gray-300">
              <FcPhoneAndroid className="inline-block text-2xl -ml-1" /> :
              +8801611695544
            </p>
            <p className='my-6 text-gray-400'>
              I,m a Front-End Developer with project experience. Honestly, I
              love coding and coding is my walks of life. I'm very responsible
              with my work and very helpful. proficient with 
            </p>
          <ul className='flex flex-wrap gap-6'>
            <li className='py-2 px-6 bg-yellow-800 text-gray-300'>HTML5</li>
            <li className='py-2 px-6 bg-blue-600 text-gray-300'>CSS3</li>
            <li className='py-2 px-6 bg-blue-400 text-gray-300'>BOOTSTRAP</li>
            <li className='py-2 px-6 bg-cyan-600 text-gray-300'>TAILWIND</li>
            <li className='py-2 px-6 bg-yellow-500 text-gray-700'>JAVASCRIPT</li>
            <li className='py-2 px-6 bg-indigo-600 text-gray-300'>REACT</li>
            <li className='py-2 px-6 bg-slate-600 text-gray-300'>EXPRESS JS</li>
            <li className='py-2 px-6 bg-green-600 text-gray-300'>MONGODB</li>
          </ul>
        </div>
      </div>
    </article>
  );
};

export default About;

import React from 'react';
import Arfan_Roky from '../images/arfan-roky.png';
import RESUME from '../images/resume.pdf';

const HeroPage = () => {

    return (
        <section className='p-4'>
           <div className="grid md:grid-cols-2 grid-cols-1 items-center min-h-screen">
          
            <div className='md:mt-0 mt-12 md:order-1 order-2'>
            <h1 className='md:text-7xl text-4xl font-extrabold text-white uppercase'>Hi, EveryOne</h1>
            <h2 className='md:text-8xl text-5xl text-cyan-400 font-extrabold uppercase my-3'>I'm</h2>
            <h3 className='md:text-6xl text-4xl font-bold uppercase text-white mb-6'> Arfan Roky</h3>

            <a 
            className='py-4 px-6 rounded bg-cyan-400 text-gray-700 font-bold'
            href={RESUME}
                  download=" resume.pdf">
                    DOWNLOAD RESUME
                  </a>
            </div>
            <div className='flex justify-center md:mt-0 mt-12  md:order-1'>
                <img className='bg-cyan-400 rounded-tl-full rounded-tr-full border-8' src={Arfan_Roky} alt="" />
            </div>
           </div>
        </section>
    );
};

export default HeroPage;
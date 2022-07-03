import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);


    return (
        <nav className='sticky top-0 md:border-0 border-b-2 ' style={{background: '#120e43'}}>
            <div className='flex justify-between relative p-4 items-center'>
                <p className=' border-b-4 border-cyan-400 font-bold text-2xl text-cyan-400'>
                    <Link to='/'>Arfan Roky</Link>
                </p>
                <ul className='hidden md:flex space-x-8 font-bold text-xs text-cyan-400 uppercase' >
                    <li className='hover:text-gray-500 '><Link to='/'>Home</Link></li>
                    <li className='hover:text-gray-500 '><Link to='/aboutMe'>About Me</Link></li>
                    <li className='hover:text-gray-500 '><Link to='/projects'>Projects</Link></li>
                    <li className='hover:text-gray-500 '><Link to='/blogs'>Blogs</Link></li>
                    <li className='hover:text-gray-500 '><Link to='/contact'>Contact</Link></li>
                </ul>
                <div className='md:hidden'>
                    <p  onClick={() => setOpen(!open)} className='md:hidden cursor-pointer z-20 font-bold text-5xl text-cyan-400'>+</p>

                    <ul  className={`${!open ? 'hidden': 'block'}  text-white absolute left-0 top-0 w-full text-center py-10 -z-10 `} style={{background: '#120e43'}}>
                    <li className='hover:bg-gradient-to-t from-cyan-300 py-3 hover:text-gray-100 font-bold'><Link to='/'>Home</Link></li>
                    <li className='hover:bg-gradient-to-t from-cyan-300 py-3 hover:text-gray-100 font-bold'><Link to='/aboutMe'>About Me</Link></li>
                    <li className='hover:bg-gradient-to-t from-cyan-300 py-3 hover:text-gray-100 font-bold'><Link to='/projects'>Projects</Link></li>
                    <li className='hover:bg-gradient-to-t from-cyan-300 py-3 hover:text-gray-100 font-bold'><Link to='/blogs'>Blogs</Link></li>
                    <li className='hover:bg-gradient-to-t from-cyan-300 py-3 hover:text-gray-100 font-bold'><Link to='/contact'>Contact</Link></li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
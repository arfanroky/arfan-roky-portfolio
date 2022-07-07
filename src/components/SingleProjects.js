import React from 'react';
import { Link } from 'react-router-dom';

const SingleProjects = ({project}) => {
    const {showImg, id} = project;
    return (
        <div className='md:w-[300px] md:mx-0 mx-auto '>
            <Link to={`/details/${id}`}> <img className='-z-10 w-full h-full' src={showImg} alt="" /></Link>
        </div>
    );
};

export default SingleProjects;
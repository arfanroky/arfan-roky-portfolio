import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../data/data.json';
import './ProjectDetails.css';

const ProjectDetails = () => {
    const id = useParams();


  const thisProject = projectsData.find((project) => project.id === id?.id);

  const {name,  item1, item2, item3, tech, title, liveSite, fullPageImg} = thisProject;
    return (
    <section className='md:w-[800px] mx-auto  py-12'>
        <div className='rounded shadow-2xl p-4 relative md:mx-0 mx-6'>
      <div className="scrolling-image border-t-2 p-4 shadow-2xl rounded" style={{backgroundImage:`url('${fullPageImg}')`,  backgroundSize: 'cover'}}></div>
    <div className='py-6 text-gray-100'>
      <h1 className='text-cyan-400 capitalize'>{name}</h1>
      <span className='capitalize'>{title}</span>
      <ul className='py-12'>
        <li>* {item1}</li>
        <li>* {item2}</li>
        <li>* {item3}</li>
        <li>
          <span className='text-cyan-500'>Technology Used :</span> {tech}
        </li>
      </ul>
      <a
        target='_blank' rel="noreferrer"
              className="py-4 px-12 border  hover:bg-cyan-600 hover:text-white transition rounded font-thin text-xl mt-12"
              style={{ letterSpacing: '6px' }}
              href={liveSite}
            >
              Watch
            </a>
    </div>
    </div>
    </section>
    );
};

export default ProjectDetails;
import React from 'react';
import projectsData from '../data/data.json';
import SingleProjects from './SingleProjects';


const Projects = () => {
    return (
        <section className='p-4 mt-12 '>
           <div className='text-center'>
           <p className="font-medium mb-8 text-gray-400 my-4 border-b-4 border-cyan-300 inline-block tracking-widest uppercase text-3xl">
            Projects
          </p>
           </div>
            <div className="flex flex-wrap md:justify-between justify-center gap-4 ">
                   {
                    projectsData.map((project, index) => <SingleProjects key={index} project={project}/>)
                   }
            </div>  
        </section>
    );
};

export default Projects;
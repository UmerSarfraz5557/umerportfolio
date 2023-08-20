import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { projectData } from '../../data/projectsData';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-left items-center text-center">
        <Title
          title=""
          des="Delivered Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">

        {projectData.map((project) => (
            <ProjectsCard
                project={project} 
              />
        ))}

      </div>
    </section>
  );
}

export default Projects
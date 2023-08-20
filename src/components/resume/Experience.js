import React from "react";
import {motion} from "framer-motion"
import ResumeCard from "./ResumeCard";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
         
        <ResumeCard
            title="Freelance mobile App Developer"
            subTitle="Upwork - Top Rated - (present)"
            result="Remote"
            des="As an experienced freelance developer on Upwork, I have developed multiple applications for clients, receiving stellar feedback and consistently earning a 5-star rating."
          />
         
          <ResumeCard
            title="Sr. Mobile App Developer"
            subTitle="Hazel Mobile (2022 - 2023)"
            result="Pakistan"
            des="As a Senior Mobile App Developer at Hazel Mobile, my primary responsibilities include building mobile applications from the initial stages to completion with a team. Additionally, I train interns and mentor junior developers to promote their growth and development in mobile app development. Furthermore, I collaborate with developers from other departments to assist in their projects and ensure the overall success of the company's mobile app objectives."
          />
         
          <ResumeCard
            title="Sr. Android & IOS Developer"
            subTitle="TechReneur Solutions - (2020 - 2021)"
            result="Pakistan"
            des=""
          />
        </div>
      </div>
      {/* <div>
        <div className="flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2001 - 2020</p>
          <h2 className="text-4xl font-bold">Trainer Experience</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Gym Instructor"
            subTitle="Rainbow Gym Center (2015 - 2020)"
            result="DHAKA"
            des="The training provided by universities in order to prepare people to work in various sectors of the economy or areas of culture."
          />
          <ResumeCard
            title="Web Developer and Instructor"
            subTitle="SuperKing College (2010 - 2014)"
            result="CANADA"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="School Teacher"
            subTitle="Kingstar Secondary School (2001 - 2010)"
            result="NEVADA"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          />
        </div>
      </div> */}
    </motion.div>
  );
};

export default Experience;

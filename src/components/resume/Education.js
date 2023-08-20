import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          {/* <p className="text-sm text-designColor tracking-[4px]">1998 - 2010</p> */}
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Computer Science"
            subTitle="Minhaj University Lahore (2018 - 2022)"
            result="3.5/4"
            des=""
          />
          <ResumeCard
            title="ICS"
            subTitle="Punjab College (2016 - 2018)"
            result="A grade"
            des=""
          />
          {/* <ResumeCard
            title="Secondary School Education"
            subTitle="Kingstar Secondary School (1998 - 2000)"
            result="5.00/5"
            des="Secondary education or post-primary education covers two phases on the International Standard Classification of Education scale."
          /> */}
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2010 - 2022</p>
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
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
    </motion.div>
  );
}

export default Education
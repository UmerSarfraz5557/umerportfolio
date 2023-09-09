import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import { contactImg } from "../../assets/index";
import { SiUpwork } from "react-icons/si";

const ContactLeft = () => {
  return (
    <div className="w-[50%] h-[50%]  p-4 lgl:p-8  flex flex-col gap-8 items-center justify-center">
      <img
        className="w-[50%] h-[50%]  rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col  gap-4 items-center">
        <h3 className="text-3xl font-bold text-white">Umer Sarfraz</h3>
        <p className="text-lg font-normal text-gray-400">
          Mobile App Developer
        </p>
        {/* <p className="text-base text-gray-400 tracking-wide">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis
          ipsam autem cumque, accusantium dicta odio.
        </p> */}
        {/* <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText"></span>
        </p> */}
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email:{" "}
          <span className="text-lightText">umersarfraz5557@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4 items-center">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me on</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a href="https://www.upwork.com/freelancers/umersarfraz">
              <SiUpwork />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://www.linkedin.com/in/umer-sarfraz/">
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://github.com/umersarfraz5557">
              <FaGithub />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="https://twitter.com/UmerSarfraz57">
              <FaTwitter />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;

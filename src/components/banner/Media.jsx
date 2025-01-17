import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaAndroid,
  FaApple,
  FaNode,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiNextdotjs, SiUpwork } from "react-icons/si";
const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find Me On</h2>
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
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaAndroid />
          </span>
          <span className="bannerIcon">
            <FaApple />
          </span>
          <span className="bannerIcon">
            <FaReact />
          </span>
          {/* <span className="bannerIcon">
            <FaNode />
          </span> */}
        </div>
      </div>
    </div>
  );
};

export default Media;

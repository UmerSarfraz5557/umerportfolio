import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import Media from "./Media";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: [
      "Mobile App Developer",
      "Android Developer",
      "iOS Developer",
      "React-Native Developer",
      // "Full Stack Web & Mobile Dev",
    ],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-1/2  flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm{" "}
          <span className="text-designColor capitalize">Umer Sarfraz</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#b4d2e7"
          />
        </h2>
        <p className="text-2xl mt-6 font-bodyFont leading-12 tracking-wide line-spacing:1rem">
          I bring to the table extensive experience as a Software Engineer, with
          a dedicated concentration on mobile development for almost 4 years. My
          strength lies in approaching challenges with a blend of creativity and
          versatility, allowing me to propose a range of solutions.
          <br/><br/>
          My enthusiasm for staying current with emerging technologies underscores
          my approach, as I remain open to embracing fresh and inventive
          methodologies. Collaboration is where I truly shine; I find my stride
          as a cooperative team member and contribute essential leadership
          traits to collective endeavors.
        </p>
      </div>
      {/* Media */}
      <Media />
    </div>
  );
};

export default LeftBanner;

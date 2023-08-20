import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineGeneratingTokens } from "react-icons/md";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { logo } from "../../assets/index";
import { navLinksdata } from "../../constants";
import "./nav.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [active , setActive] = useState("#");
  // const oldNavBar = () => {
  //   return (
  //     <div className="w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600">
  //       <div>
  //         <img src={logo} alt="logo" />
  //       </div>
  //       <div>
  //         <ul className="hidden mdl:inline-flex items-center gap-6 lg:gap-10">
  //           {navLinksdata.map(({ _id, title, link }) => (
  //             <li
  //               className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
  //               key={_id}
  //             >
  //               <Link
  //                 activeClass="active"
  //                 to={link}
  //                 spy={true}
  //                 smooth={true}
  //                 offset={-70}
  //                 duration={500}
  //               >
  //                 {title}
  //               </Link>
  //             </li>
  //           ))}
  //         </ul>
  //         <span
  //           onClick={() => setShowMenu(!showMenu)}
  //           className="text-xl mdl:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer"
  //         >
  //           <FiMenu />
  //         </span>
  //         {showMenu && (
  //           <div className="w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4 scrollbar-hide">
  //             <div className="flex flex-col gap-8 py-2 relative">
  //               <div>
  //                 <img className="w-32" src={logo} alt="logo" />
  //                 <p className="text-sm text-gray-400 mt-2">
  //                   Lorem ipsum dolor sit, amet consectetur adipisicing elit.
  //                   Earum soluta perspiciatis molestias enim cum repellat,
  //                   magnam exercitationem distinctio aliquid nam.
  //                 </p>
  //               </div>
  //               <ul className="flex flex-col gap-4">
  //                 {navLinksdata.map((item) => (
  //                   <li
  //                     key={item._id}
  //                     className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
  //                   >
  //                     <Link
  //                       onClick={() => setShowMenu(false)}
  //                       activeClass="active"
  //                       to={item.link}
  //                       spy={true}
  //                       smooth={true}
  //                       offset={-70}
  //                       duration={500}
  //                     >
  //                       {item.title}
  //                     </Link>
  //                   </li>
  //                 ))}
  //               </ul>
  //               <div className="flex flex-col gap-4">
  //                 <h2 className="text-base uppercase font-titleFont mb-4">
  //                   Find me in
  //                 </h2>
  //                 <div className="flex gap-4">
  //                   <span className="bannerIcon">
  //                     <FaFacebookF />
  //                   </span>
  //                   <span className="bannerIcon">
  //                     <FaTwitter />
  //                   </span>
  //                   <span className="bannerIcon">
  //                     <FaLinkedinIn />
  //                   </span>
  //                 </div>
  //               </div>
  //               <span
  //                 onClick={() => setShowMenu(false)}
  //                 className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
  //               >
  //                 <MdClose />
  //               </span>
  //             </div>
  //           </div>
  //         )}
  //       </div>
  //     </div>
  //   );
  // };

  const bottomNavBar = () => {
    return (
      <nav  >
        <a href="#" className={active === "#" ? 'active' : ''} onClick={()=>{setActive("#")}}>
          <AiOutlineHome />
        </a>
        <a href="#features" className={active === "#features" ? 'active' : ''}  onClick={()=>{setActive("#features")}}>
          <RiServiceLine />
        </a>
        <a href="#projects" className={active === "#projects" ? 'active' : ''} onClick={()=>{setActive("#projects")}} >
          <BiBook />
        </a>
        <a href="#resume" className={active === "#resume" ? 'active' : ''} onClick={()=>{setActive("#resume")}}>
          <CgProfile />
        </a>
        <a href="#testimonial" className={active === "#testimonial" ? 'active' : ''} onClick={()=>{setActive("#testimonial")}}>
          <MdOutlineGeneratingTokens />
        </a>
        <a href="#contact" className={active === "#contact" ? 'active' : ''} onClick={()=>{setActive("#contact")}}>
          <BiMessageSquareDetail />
        </a>
      </nav>
    );
  };

  return bottomNavBar();
};

export default Navbar;

import gsap from "gsap";
import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";
import logo from '../assets/logo.png';
import cv from '../../public/cv.pdf'


const Navbar = () => {
    const navRef = useRef(null);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isHidden, setIsHidden] = useState(false);
    const link = <>
        <Link to="Home" duration={500} className="px-4 py-2 cursor-pointer rounded-lg text-accent font-medium" activeClass="bg-primary text-accent" spy={true} smooth={true} onSetActive={()=> document.title="Home | Ramim"}>Home</Link>
        <Link to="AboutMe" duration={500} className="px-4 py-2 cursor-pointer rounded-lg text-accent font-medium" activeClass="bg-primary text-accent" spy={true} smooth={true} onSetActive={()=> document.title="About Me | Ramim"}>About Me</Link>
        <Link to="Skills" activeClass="bg-primary text-accent" spy={true}  duration={500} className="px-4 py-2 cursor-pointer rounded-lg text-accent font-medium" smooth={true} onSetActive={()=> document.title="Skills | Ramim"}>Skills</Link>
         <Link to="MyProjects" activeClass="bg-primary text-accent" spy={true}  duration={500} className="px-4 py-2 cursor-pointer rounded-lg text-accent font-medium" smooth={true} onSetActive={()=> document.title="My Projects | Ramim"}>My Projects</Link>
        <Link to="ContactMe" activeClass="bg-primary text-accent" spy={true}  duration={500} className="px-4 py-2 cursor-pointer rounded-lg text-accent font-medium" smooth={true} onSetActive={()=> document.title="Contact Me | Ramim"}>Contact Me</Link>
    </>

    useEffect(()=> {
        const handleScroll = () => {
            const currentScroll = window.scrollY
            console.log(currentScroll);

            if(currentScroll>200 && currentScroll>lastScrollY && !isHidden){
                gsap.to(navRef.current, {y: "-100%", duration: 0.4, ease: "power2.out"})
                setIsHidden(true);
            }
            else if(currentScroll<lastScrollY && isHidden){
                gsap.to(navRef.current, {y: "0%", duration:0.4, ease: "power2.out"});
                setIsHidden(false);
            }

            setLastScrollY(currentScroll);
        }
        window.addEventListener("scroll", handleScroll);

        return ()=> window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY, isHidden]);
  return (
    <div ref={navRef} className="navbar fixed top-0 bg-base-100 shadow-sm lg:px-20 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {link}
          </ul>
        </div>
        <img className="w-20" src={logo} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
         {link}
        </ul>
      </div>
      <div className="navbar-end">
        <a onClick={()=> window.open(`${cv}`, "_blank")} href={cv} download="MirRamimCV.pdf" className="btn btn-secondary">Resume</a>
      </div>
    </div>
  );
};

export default Navbar;

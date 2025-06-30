import React from "react";
import myImage from "../assets/me.png";
import { Link } from "react-scroll";
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';
import gmail from '../assets/gmail.png';

const Banner = () => {
  return (
    <div id="Home" className="min-h-[90vh] pt-20 mx-20">
      <div className="flex items-center px-10">
        <div className="w-1/2">
          <h3 className="font-bold text-4xl text-primary mb-3">
            Mir Ramim Ahammad Arpon
          </h3>
          <p className="font-medium text-xl text-secondary mb-5">
            -Full Stack Web Developer
          </p>
          <p>
            I am a dedicated and result-driven full stack developer with a
            Bachelor of Science in Computer Science and Engineering. I
            specialize in building modern responsive web application.
          </p>
            <div className="flex gap-7 my-3">
                <a  target="_blank" href="https://github.com/ramimahammadarpon"><img className="w-8" src={github} alt="" /></a> 
                <a target="_blank"  href="https://www.linkedin.com/in/ramim-ahammad-367431297/"><img className="w-8" src={linkedin} alt="" /></a>
                <a target="_blank"  href="mailto:mirramimahammad@gmail.com"><img className="w-8" src={gmail} alt="" /></a>
            </div>
          <Link to="ContactMe" smooth={true} duration={500} className="btn btn-secondary mt-3">Contact Me</Link>
        </div>
        <div className="w-1/2 flex justify-end py-20">
            <figure className="w-4/9 bg-primary border-8 border-secondary rounded-xl overflow-hidden">
                <img src={myImage} className="" alt="" />
            </figure>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import react from '../assets/react.png';
import tailwind from '../assets/tailwind.png';
import framerMotion from '../assets/framer.png';
import gsapImg from '../assets/gsap.png';
import css from '../assets/css.png';
import lottie from '../assets/lottie.png';
import node from '../assets/node.png';
import express from '../assets/express.png';
import mongodb from '../assets/mongodb.png';
import git from '../assets/git.png';
import github from '../assets/github.png';
import gitlab from '../assets/gitlab.png';
import firebase from '../assets/firebase.png';

gsap.registerPlugin(ScrollTrigger);

const SkillCard = ({ title, skills, cardRef }) => (
  <div ref={cardRef} className="card bg-base-200 p-6 opacity-0">
    <h3 className="text-xl font-semibold mb-4 text-center">{title}</h3>
    <div className="grid grid-cols-3 md:grid-cols-6 justify-center gap-5 items-center text-5xl text-primary">
      {skills.map((skill, idx) => (
        <div
          key={idx}
          className="tooltip transition-transform hover:scale-110 flex items-center justify-center"
          data-tip={skill.name}
        >
          <div className="w-30 h-30">{skill.icon}</div>
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const frontendRef = useRef(null);
  const backendRef = useRef(null);
  const versionControlRef = useRef(null);

  const frontend = [
    { name: "React", icon: <img src={react} alt="react" className="w-full object-center object-cover" />},
    { name: "Tailwind CSS", icon: <img src={tailwind} alt="tailwind" className="w-full object-center object-cover" /> },
    { name: "GSAP", icon: <img src={gsapImg} alt="GSAP" className="w-5fullobject-center object-cover" /> },
    { name: "Framer Motion", icon: <img src={framerMotion} alt="Framer Motion" className="w-full object-center object-cover" /> },
    { name: "Vanilla CSS", icon: <img src={css} alt="Css" className="w-full object-center object-cover" /> },
    { name: "Lottie React", icon: <img src={lottie} alt="Lottie" className="w-full object-center object-cover" />},
  ];

  const backend = [
    { name: "Node.js", icon: <img src={node} alt="node" className="w-full object-center object-cover" /> },
    { name: "MongoDB", icon: <img src={mongodb} alt="mongodb" className="w-full object-center object-cover" /> },
    { name: "Express.js", icon: <img src={express} alt="express" className="w-full object-center object-cover" />},
    { name: "Firebase", icon: <img src={firebase} alt="firebase" className="w-full object-center object-cover" /> },
  ];

  const versionControl = [
    { name: "Git", icon: <img src={git} alt="git" className="w-full object-center object-cover" /> },
    { name: "GitHub", icon: <img src={github} alt="github" className="w-full object-center object-cover" /> },
    { name: "GitLab", icon: <img src={gitlab} alt="gitlab" className="w-full object-center object-cover" /> },
  ];

  useLayoutEffect(() => {
    const animateCard = (ref, delay = 0) => {
      gsap.fromTo(
        ref.current,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out",
          delay,
          scrollTrigger: {
            trigger: ref.current,
            start: "top 80%",
          },
        }
      );
    };

    animateCard(frontendRef, 0.1);
    animateCard(backendRef, 0.3);
    animateCard(versionControlRef, 0.5);
  }, []);

  return (
    <section
      id="Skills"
      className="px-6 mb-10 lg:mb-20 lg:px-24 bg-base-100 text-base-content"
    >
      <div className="text-center mb-5">
        <h2 className="text-4xl text-primary font-bold">Skills</h2>
        <p className="text-lg text-gray-500 mt-2">Technologies I use and love</p>
      </div>

      <div className="max-w-6xl mx-auto">
        <SkillCard title="Frontend" skills={frontend} cardRef={frontendRef} />
        <SkillCard title="Backend" skills={backend} cardRef={backendRef} />
        <SkillCard title="Version Control" skills={versionControl} cardRef={versionControlRef} />
      </div>
    </section>
  );
};

export default Skills;

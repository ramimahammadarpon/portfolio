import React from "react";
import about from "../assets/aboutme.png";

const Aboutme = () => {
  return (
    <section
      id="AboutMe"
      className="my-10 lg:my-20 px-6 lg:px-32 bg-base-100 text-base-content"
    >
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-primary">About Me</h2>
        <p className="text-lg text-gray-500 mt-2">
          Mir Ramim Ahammad Arpon -Web Developer
        </p>
      </div>
      <div className="lg:flex items-center">
         <div className="lg:w-4/10">
          <img src={about} alt="" />
        </div>
        <div className="max-w-4xl mx-auto lg:w-6/10">
          <div className="card bg-base-200 lg:p-8 space-y-6">
            <p>
              👋 Hi! I'm a passionate and curious developer whose journey into
              programming began quite unexpectedly. It all started during my
              university years when some friends encouraged me to take part in a
              programming contest. At the time, I wasn't particularly interested
              in coding, but that one event changed everything — it helped me
              realize what truly excites me: solving problems through
              technology.
            </p>
            <p>
              🚀 Since then, I've immersed myself in the world of programming.
              What drives me most is the thrill of tackling challenging tasks
              and the satisfaction of learning something new. There's a special
              kind of joy that comes from solving a problem entirely on my own —
              it's both empowering and deeply fulfilling.
            </p>
            <p>
              🌍 Outside of coding, I'm an avid English speaker and love
              connecting with people from around the world. I often hang out on
              Discord, chatting with friends from different countries. These
              conversations not only help sharpen my English and communication
              skills but also give me fresh perspectives and cultural insights.
            </p>
            <p>
              ✨ As for my personality, I'd describe myself as driven,
              adaptable, and always eager to grow. Whether it's learning a new
              framework, solving a complex bug, or having a late-night
              discussion about tech trends, I'm always up for it. I thrive in
              environments where curiosity is encouraged, and growth is
              constant.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;

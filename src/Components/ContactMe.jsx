import React from "react";
import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import gmail from "../assets/gmail.png";

const ContactMe = () => {
  const formRef = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qknjg04", // Replace with your EmailJS service ID
        "template_xsshbpu", // Replace with your EmailJS template ID
        formRef.current,
        "BNAUSX6SszjLhk4fP" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          setMessageSent(true);
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
        }
      );
  };
  return (
    <section id="ContactMe" className="bg-gray-100 px-4 mb-10 lg:mb-20">
      <div className="">
        <h2 className="text-4xl text-primary font-bold mb-8 lg:mb-12 text-center">
          Contact Me
        </h2>

        <div className="flex flex-col lg:flex-row lg:justify-center">
          <img
            className="object-center object-cover lg:w-1/2 rounded-2xl"
            src="https://i.ibb.co/1JYHz7pN/image.png"
            alt=""
          />
          <div>
            <div className="flex justify-center mt-6 gap-6 text-3xl mb-6">
              <a target="_blank" href="https://github.com/ramimahammadarpon">
                <img className="w-8" src={github} alt="" />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ramim-ahammad-367431297/"
              >
                <img className="w-8" src={linkedin} alt="" />
              </a>
              <a target="_blank" href="mailto:mirramimahammad@gmail.com">
                <img className="w-8" src={gmail} alt="" />
              </a>
            </div>

            <form
              ref={formRef}
              onSubmit={sendEmail}
              className="bg-white rounded-lg p-6 space-y-4 max-w-xl mx-auto"
            >
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full px-4 py-2 border rounded-md"
              />
              <textarea
                name="message"
                rows="5"
                placeholder="Your Message"
                required
                className="w-full px-4 py-2 border rounded-md"
              ></textarea>

              <button
                type="submit"
                className="btn btn-secondary text-white px-6 py-2 rounded"
              >
                Send Message
              </button>

              {messageSent && (
                <p className="text-green-600 mt-2">
                  Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

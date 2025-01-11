'use client'
import React, { useState, useRef } from 'react'
import { motion, useInView } from "framer-motion";

const experiences = [
  {
    index: 1,
    position: "Full‐stack Web Developer",
    company: "BurdenOff Consultancy Services", 
    date: "Nov 2024 - present",
    stack: ["Node.js", "React", "Docker", "TypeScript", "GraphQL", "Capacitor", "PostgreSQL"],
    shortInfo: `
      As a Full Stack Intern, I develop cross-platform apps using React.js, Ionic.js, and Capacitor, with experience in TypeScript, GraphQL, PostgreSQL, and Node.js. I've contributed to projects including an online paper-checking system, AI bot UI design, vehicle tracking, and a digital documentation signing platform for an edtech startup.
    `,
    summary: `
I am a Full Stack Developer with experience in building cross-platform applications using React.js, Ionic.js, and Capacitor for Android, iOS, and desktop. I have developed solutions like an online paper-checking system, integrating PDF rendering and annotation tools, along with AI bot UI design and vehicle tracking systems for transportation companies. The vehicle tracking system utilized Capacitor's Google Maps, and socket connections for real-time vehicle location updates. I created an algorithm to compress long coordinate arrays into a more efficient set of 23 coordinatesand using those coordinated along with Google API it calculates distances travelled. Additionally, I integrated a digital document signing service for an edtech platform, where admins can place signature positions on documents, link them to user emails, and it will notify users with a URL to sign at the designated position. I mostly worked on TypeScript, GraphQL, PostgreSQL, and Node.js to ensure high performance and seamless integration.
    `
  },
  {
    index: 1,
    position: "Full‐stack Web Developer Intern",
    company: "BurdenOff Consultancy Services",
    date: "Aug - Nov 2024 ",
    stack: ["Node.js", "React", "Docker", "TypeScript", "GraphQL", "Capacitor", "PostgreSQL"],
    shortInfo: `
      Developed an online paper-checking system used in multiple South Indian universities, initially as a web app and later converted to Android and iOS using Capacitor. Added features like freehand drawing, zoom, and a question list panel for better user experience.
    `,
    summary: `
    I developed a comprehensive online paper-checking system that is currently being used in multiple universities in South India. The system, initially built as a web application, was later converted into Android and iOS apps using Capacitor.js. The core functionality includes displaying the question paper and answer key side-by-side, utilizing pdf-js and react-pdf for rendering PDFs. Students can view the checked paper, zoom in/out, and interact with the document by drawing freehand, marking mistakes, or adding annotations like circles, squares, and X marks. The system also includes a question list panel similar to online competitive exams, where invigilators can assign marks, remarks, and step marks to each question. I worked extensively with technologies such as Node.js, React, Docker, TypeScript, GraphQL, PostgreSQL, and Capacitor to ensure seamless integration and high performance. I also contributed to improving the UI of multiple projects, enhancing the overall user experience across platforms.
    `
  },
  {
    index: 2,
    position: "Full‐stack Web Developer Internship",
    date: "2024",
    stack: ["Node.js", "MongoDB", "TailwindCSS", "React-components", "React", "Redux", "Express"],
    shortInfo: `
   Developed a full-featured e-commerce website with secure user login, product browsing, shopping cart, Cashfree payment integration, and an admin dashboard for CRUD operations during a certification-based internship.
    `,
    summary: `
    During a certification-based internship, I was assigned the task of developing a full-featured e-commerce application. The project involved building a secure and responsive platform using a tech stack that included Node.js, MongoDB, TailwindCSS, React components, React-Redux, and Express. The primary goal was to create an interactive and user-friendly e-commerce website that provided seamless browsing and shopping experiences. I implemented secure user login and product browsing features, as well as integrated a shopping cart functionality for a smooth checkout process. Additionally, I integrated Cashfree payment gateway to facilitate secure online transactions. The application also included a comprehensive admin dashboard, allowing for efficient CRUD operations to manage products, users, and orders. The project was a great learning experience, enhancing my skills in full-stack development and providing hands-on experience in implementing essential features required for a modern e-commerce platform.
    `
  },

];

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const openModal = (experience) => {
    setSelectedExperience(experience);
  };

  const closeModal = () => {
    setSelectedExperience(null);
  };

  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      className="container"
    >
      <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white text-center cursor-default  w-fit mx-auto">Experience</h2>
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-blue-50 pt-20">
        {experiences.map((experience, i) => (
          experience.index % 2 === 0 ? (
            <div key={i} className="flex flex-row-reverse md:contents group">
              <div
                onClick={() => openModal(experience)}
                className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-2 border-purple-500 col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-800/40 hover:to-indigo-800/40 group-hover:scale-105 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-bold text-base mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-poppins">{experience.position}</h3>
                {experience.company && <p className="text-indigo-300 text-sm mb-1">{experience.company}</p>}
                <p className="text-indigo-300 font-semibold mb-2 text-sm">{experience.date}</p>
                <p className="leading-tight text-justify text-white/90 font-medium text-sm">
                  {experience.shortInfo}
                </p>
              </div>
              <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                <div className="h-full w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-r from-purple-400 to-indigo-400 pointer-events-none"></div>
                </div>
                <div
                  onClick={() => openModal(experience)}
                  className="w-8 h-8 absolute top-1/2 -mt-4 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 shadow-lg shadow-purple-500/50 group-hover:scale-125 hover:scale-125 transition-all duration-300 cursor-pointer"
                ></div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex md:contents group">
              <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                <div className="h-full w-8 flex items-center justify-center">
                  <div className="h-full w-1 bg-gradient-to-r from-purple-400 to-indigo-400 pointer-events-none"></div>
                </div>
                <div
                  onClick={() => openModal(experience)}
                  className="w-8 h-8 absolute top-1/2 -mt-4 rounded-full bg-gradient-to-r from-purple-400 to-indigo-400 shadow-lg shadow-purple-500/50 group-hover:scale-125 hover:scale-125 transition-all duration-300 cursor-pointer"
                ></div>
              </div>
              <div
                onClick={() => openModal(experience)}
                className="bg-gradient-to-r from-purple-900/30 to-indigo-900/30 border-2 border-purple-500 col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-800/40 hover:to-indigo-800/40 group-hover:scale-105 hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                <h3 className="font-bold text-base mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-poppins">{experience.position}</h3>
                {experience.company && <p className="text-indigo-300 text-sm mb-1">{experience.company}</p>}
                <p className="text-indigo-300 font-semibold mb-2 text-sm">{experience.date}</p>
                <p className="leading-tight text-justify text-white/90 font-medium text-sm">
                  {experience.shortInfo}
                </p>
              </div>
            </div>
          )
        ))}
      </div>

      {selectedExperience && (
        <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50" onClick={closeModal}>
          <div className="relative bg-gradient-to-r from-purple-900/90 to-indigo-900/90 border-2 border-purple-500 p-8 rounded-xl max-w-2xl w-full mx-4 backdrop-blur-sm" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-red-400 hover:text-red-700 transition-colors duration-300"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h2 className="text-xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400 font-poppins">
              {selectedExperience.position}
            </h2>
            <p className="text-indigo-300 text-sm mb-2">{selectedExperience.company}</p>
            <div className="flex flex-wrap gap-1.5 mb-3">
              {selectedExperience.stack.map((tech, index) => (
                <span key={index} className="px-2 py-0.5 text-[12px] font-bold bg-purple-500/20 text-purple-300 rounded-full border border-purple-500">
                  {tech}
                </span>
              ))}
            </div>
            <p className="text-indigo-300 font-semibold mb-4 text-sm">{selectedExperience.date}</p>
            <p className="text-white/90 mb-6 text-sm leading-relaxed font-medium">{selectedExperience.summary}</p>
          </div>
        </div>
      )}
    </motion.div>
  );
};

export default Experience;
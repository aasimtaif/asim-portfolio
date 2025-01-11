'use client'
import React from 'react'

const experiences = [
  {
    position: "Software Engineer",
    company: "Company Name",
    date: "2020 - Present",
    details: "Description of your role and key achievements"
  },
  {
    position: "Frontend Developer", 
    company: "Previous Company",
    date: "2018 - 2020",
    details: "Description of your role and key achievements"
  },
  {
    position: "Web Developer",
    company: "First Company", 
    date: "2016 - 2018",
    details: "Description of your role and key achievements"
  }
];

const Experience = () => {
  return (
    <div className="flex flex-col items-center w-full">
      
      <h2 className="text-3xl font-semibold mb-8 text-gray-900 dark:text-white pb-20">Experience</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700 max-w-2xl left-0">
        {experiences.map((exp, index) => (
          <li key={index} className="mb-16 ms-6">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
              <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
              </svg>
            </span>
            <div className={`md:${index % 2 === 0 ? 'ml-8' : '-ml-[calc(100%+3rem)]'} ml-8`}>
              <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">
                {exp.position}
              </h3>
              <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {exp.date}
              </time>
              <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                {exp.details}
              </p>
            </div>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default Experience;

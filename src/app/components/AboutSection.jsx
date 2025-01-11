"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills", 
    content: (
      <ul className="list-none pl-2 grid grid-cols-2 lg:grid-cols-4 gap-4">
        <li className="before:content-['+'] before:mr-2 cursor-default">Next.js</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">React</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">TypeScript</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">JavaScript</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Redux</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Capacitor.js</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">FireBase</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Node.js</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Express</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">GraphQL</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Prisma</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">MySQL</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">postgresql</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">MongoDB</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">AWS</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">HTML</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Css</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">tailwindcss</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Scss</li>
        <li className="before:content-['+'] before:mr-2 cursor-default">Git</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-none pl-2">
        <li className="before:content-['•'] before:mr-2 cursor-default">B.Tech in Information Technology Shri Guru Gobind Singhji Institute of Engineering and Technology  </li>
        <li className="before:content-['•'] before:mr-2 cursor-default">The Complete 2024 Web Development Bootcamp</li>
      </ul>
    ),
  },
  {
    title: "Certifications", 
    id: "certifications",
    content: (
      <ul className="list-none pl-2">
        <li className=" before:mr-2 cursor-default">AWS Cloud Practitioner</li>
        <li className=" before:mr-2 cursor-default">Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" class="rounded-b-xl " alt="about" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have hands on experience
            of JavaScript, React, Redux, Node.js, Express, MongoDB, FireBase, MySQL,
            Prisma, HTML, CSS, SCSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

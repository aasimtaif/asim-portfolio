"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "React Admin Dashboard",
    description: "Admin Dashboard for managing the booking website data",
    image: "/images/projects/1.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aasimtaif/bookingApp",
    previewUrl: "https://booking-app-five-pi.vercel.app/",
  },
  {
    id: 2,
    title: "Hotel Booking Website",
    description: "Full Stack Hotel Booking Web Application",
    image: "/images/projects/2.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aasimtaif/bookingApp",
    previewUrl: "https://booking-app-ninm.vercel.app/",
  },
  {
    id: 3,
    title: "E-commerce Application",
    description: "Full-stack E-commerce Application including payment gateway integration",
    image: "/images/projects/3.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aasimtaif/Ineuron-InternShip",
    previewUrl: "https://ineuron-intern-ship-swart.vercel.app/",
  },
  {
    id: 4,
    title: "DashBoard of Ecommrerce Application ",
    description: " Built an admin dashboard for a comprehensive product, user, category, and order management (CRUD operations: Create, Read, Update Delete)",
    image: "/images/projects/4.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aasimtaif/Ineuron-InternShip/",
    previewUrl: "https://ineuron-intern-ship.vercel.app/",
  },
  {
    id: 5,
    title: "Lift Simulation",
    description: "",
    image: "/images/projects/5.jpg",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aasimtaif/Lift-Simulation",
    previewUrl: "https://64e22f6ec3249774dd2bab16--benevolent-syrniki-c3580b.netlify.app/",
  },
  {
    id: 6,
    title: "Secret Sharing web App",
    description: "A full satck web application where u can generate a link for ur secret and share it.The link will be valid for your desired time and number of time u want someone to access it and after that it will be deleted.",
    image: "/images/projects/6.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/aasimtaif/secrets_sharing",
    previewUrl: "https://secrets-keeper.vercel.app/",
  },

];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;

import Image from "next/image";
import React from "react";
import Link from "next/link";
import { TbExternalLink } from "react-icons/tb";
import { projects } from "@/constants/constants";
import Animated from "./Animated";

const ProjectsSection = () => {
  return (
    <section id="projects" className="content-wrapper">
      <Animated>
        <div className="section__header">
          <h2 className="section__header__title">My Projects</h2>
          <p className="section__header__subtitle">
            Explore my portfolio of web development projects that showcase my
            skills
          </p>
        </div>
      </Animated>

      <div className="projects__list">
        {projects.map((project, index) => (
          <Animated delay={(index % 3) / 10} key={`project${index}`}>
            <div className="card project">
              <div className="project__image">
                <Image src={project.img} fill alt="" />
              </div>
              <div className="project__details">
                <div>
                  <h4 className="project__title">{project.title}</h4>
                  <p className="project__description">{project.description}</p>
                </div>
                <Link
                  href={project.projectLink}
                  target="blank"
                  className="link-badge"
                >
                  <TbExternalLink size={20} />
                </Link>
              </div>
            </div>
          </Animated>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

import Link from "next/link";
import React from "react";
import { BsDownload } from "react-icons/bs";
import { FaUserGraduate } from "react-icons/fa";
import Animated from "./Animated";
import { education, experiences, skills } from "@/constants/constants";

const AboutSection = () => {
  return (
    <section id="about" className="content-wrapper">
      <Animated>
        <div className="section__header">
          <h2 className="section__header__title">About Me</h2>
          <p className="section__header__subtitle">
            Information About Me, My Experiences, and My Skills
          </p>
        </div>
      </Animated>

      {/* profile image */}
      <div className="about-me card">
        <Animated>
          <h3 className="about-me__title">
            Hello, I am Aryan Budhathoki, Based in Nepal
          </h3>
          <p className="about-me__description">
            I am a passionate web developer with a keen interest in creating
            efficient and dynamic web applications. My journey in tech has
            equipped me with a diverse skill set, and I&apo;m constantly
            exploring new technologies to enhance my craft.
          </p>

          <ul className="about-me__detail">
            <li className="about-me__detail__item">
              <span className="item__label">Phone:</span> +977 986-4331992
            </li>
            <li className="about-me__detail__item">
              <span className="item__label">Nationality:</span> Nepali
            </li>
            <li className="about-me__detail__item">
              <span className="item__label">Whatsapp:</span> +977 986-43311992
            </li>
            <li className="about-me__detail__item">
              <span className="item__label">Email:</span> aryanmgr79@gmail.com
            </li>
          </ul>
          <Link
            href="AryanBudhathokiCV.pdf"
            download="AryanBudhathokiCV.pdf"
            className="btn"
            target="blank"
          >
            <BsDownload />
            Download My CV
          </Link>
        </Animated>
      </div>
      <div className="qualifications">
        <div className="experience card">
          <Animated>
            <h4 className="qualifications__title">My Experiences</h4>
          </Animated>

          <div className="qualifications__list">
            {experiences.map((experience, index) => (
              <Animated delay={index / 10} key={`experiece${index}`}>
                <div className="qualification">
                  <div className="icon-badge">{experience.icon}</div>
                  <div className="qualification__detail">
                    <div className="qualification__detail__header">
                      <h6 className="qualification__detail__title">
                        {experience.title}
                      </h6>
                      <p className="qualification__detail__subtitle">
                        {experience.subtitle}
                      </p>
                    </div>
                    <p className="qualification__description">
                      {experience.description}
                    </p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>

        <div className="education card">
          <Animated additionalStyle={{ height: "min-content" }}>
            <h4 className="qualifications__title">My Education</h4>
          </Animated>
          <div className="qualifications__list">
            {education.map((item, index) => (
              <Animated delay={index / 10} key={`education${index}`}>
                <div className="qualification">
                  <div className="icon-badge">
                    <FaUserGraduate size={24} />
                  </div>
                  <div className="qualification__detail">
                    <div className="qualification__detail__header">
                      <h6 className="qualification__detail__title">
                        {item.title}
                      </h6>
                      <p className="qualification__detail__subtitle">
                        {item.subtitle}
                      </p>
                      <span className="badge">{item.grade}</span>
                    </div>
                    <p className="qualification__description">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Animated>
            ))}
          </div>
        </div>
      </div>
      <div className="skills">
        <Animated>
          <h4 className="qualifications__title">My Skills</h4>
        </Animated>
        <div className="qualifications__list">
          {skills.map((skill, index) => (
            <Animated delay={(index % 3) / 15} key={`skill${index}`}>
              <div className="qualification card">
                <div className="icon-badge">{skill.icon}</div>
                <div className="qualification__detail">
                  <div className="qualification__detail__header">
                    <h6 className="qualification__detail__title">
                      {skill.title}
                    </h6>
                    <p className="qualification__detail__subtitle">
                      {skill.subtitle}
                    </p>
                  </div>
                  <p className="qualification__description">
                    {skill.description}
                  </p>
                </div>
              </div>
            </Animated>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

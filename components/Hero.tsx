import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaUserCircle,
} from "react-icons/fa";
import BackgroundImage from "@/public/bg.jpg";
import Animated from "./Animated";

const HeroSection = () => {
  return (
    <section className="hero" id="home">
      <Animated
        additionalStyle={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div className="hero__socials content-wrapper">
          <Link
            href="https://www.facebook.com/aryan.magar.359778"
            target="blank"
          >
            <FaFacebook size={24} />
          </Link>
          <Link href="https://www.instagram.com/aryan_mgr_/" target="blank">
            <FaInstagram size={24} />
          </Link>
          <Link href="https://github.com/aryan-79" target="blank">
            <FaGithub size={24} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/aryan-budhathoki-8aa229248/"
            target="blank"
          >
            <FaLinkedin size={24} />
          </Link>
        </div>
        <div className="hero__banner content-wrapper">
          <h6 className="hero__banner__subtitle">🔥 Hi There,</h6>
          <h1 className="hero__banner__title">I Am a Developer!</h1>
          <div className="hero__banner__description">
            I’m a Web Developer dedicated to building engaging and user-friendly
            websites. I enjoy transforming concepts into reality with a focus on
            seamless design and functionality.
          </div>
          <Link href="#about" className="btn">
            <FaUserCircle />
            More About Me
          </Link>
        </div>
        <div className="hero__info content-wrapper">
          <div className="hero__info__item">
            <p>Email:</p>
            <p>aryanmgr79@gmail.com</p>
          </div>
          <div className="hero__info__item">
            <p>Phone:</p>
            <p>+977 986-4331992</p>
          </div>
          <div className="hero__info__item">
            <p>Location:</p>
            <p>Palpa, Nepal</p>
          </div>
        </div>
      </Animated>

      <div className="hero-background">
        <Image
          src={BackgroundImage}
          alt=""
          fill
          priority
          sizes="(max-width: 768px) 768px, (max-width: 1440px) 1440px, 100vw"
        />
      </div>
    </section>
  );
};

export default HeroSection;

import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMobile,
  FaTelegramPlane,
} from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoShareSocialSharp } from "react-icons/io5";
import Animated from "./Animated";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });

  const createMailToLink = () => {
    const { name, subject, message } = formData;
    const email = "aryanmgr79@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${subject}&body=${message}`;
    return mailtoLink;
  };
  return (
    <section id="contact" className="content-wrapper">
      <Animated>
        <div className="section__header">
          <h2 className="section__header__title">Get in Touch</h2>
          <p className="section__header__subtitle">
            I’m just a message away! Feel free to contact me
          </p>
        </div>
      </Animated>

      <div className="card contact">
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              name="subject"
              id="subject"
              placeholder="Enter Email Subject"
              value={formData.subject}
              onChange={(e) =>
                setFormData({ ...formData, subject: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
            />
          </div>
          <Link href={createMailToLink()} className="btn">
            <FaTelegramPlane />
            Send Message
          </Link>
        </form>

        <div className="get-in-touch">
          <h4 className="title">Get In Touch</h4>
          <p className="description">
            Looking to bring your web project to life? I&apos;m a skilled web
            developer ready to help you turn your ideas into reality. Whether
            you need a stunning website, custom features, or ongoing support,
            I&apos;m here to deliver high-quality solutions that meet your
            needs. Let&apos;s connect and discuss how I can contribute to your
            success!
          </p>

          <div className="contacts">
            <p>
              <span className="icon-badge">
                <FaMobile size={24} />
              </span>
              +977 986-4331992
            </p>
            <p>
              <span className="icon-badge">
                <IoIosMail size={24} />
              </span>
              aryanmgr79@gmail.com
            </p>
            <p>
              <span className="icon-badge">
                <IoShareSocialSharp size={24} />
              </span>
              <Link
                href="https://www.facebook.com/aryan.magar.359778"
                className="social-link"
              >
                <FaFacebook size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/aryan_mgr_/"
                className="social-link"
              >
                <FaInstagram size={20} />
              </Link>
              <Link href="https://github.com/aryan-79" className="social-link">
                <FaGithub size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/in/aryan-budhathoki-8aa229248/"
                className="social-link"
              >
                <FaLinkedin size={20} />
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

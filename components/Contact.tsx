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
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const createMailToLink = () => {
    const sub = encodeURIComponent(subject);
    const body = encodeURIComponent(message);
    return `mailto:aryanmgr79@gmail.com?subject=${sub}&body=${body}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !subject || !message) {
      return;
    }
    window.open(createMailToLink(), "_blank");
  };
  return (
    <section id="contact" className="content-wrapper">
      <Animated>
        <div className="section__header">
          <h2 className="section__header__title">Get in Touch</h2>
          <p className="section__header__subtitle">
            I&apos;m just a message away! Feel free to contact me
          </p>
        </div>
      </Animated>

      <div className="card contact">
        <form onSubmit={handleSubmit}>
          <FloatingLabelInput label="Name">
            <input
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </FloatingLabelInput>
          <FloatingLabelInput label="Subject">
            <input
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
          </FloatingLabelInput>
          <FloatingLabelInput label="Message">
            <textarea
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </FloatingLabelInput>
          <button className="btn">
            <FaTelegramPlane />
            Send Message
          </button>
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

interface FloatingLabelInputProps {
  label: string;
  children: React.ReactElement;
}

function FloatingLabelInput({ label, children }: FloatingLabelInputProps) {
  const id = React.useId();
  const child = React.Children.only(children);

  return (
    <div className="floating-label-input">
      <div className="floating-label-input__wrapper">
        {React.cloneElement(child, {
          id,
          placeholder: label,
          className: `floating-label-input__input ${
            child.props.className || ""
          }`,
        })}
        <label htmlFor={id} className="floating-label-input__label">
          {label}
        </label>
      </div>
    </div>
  );
}

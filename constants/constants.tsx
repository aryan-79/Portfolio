import { PiBagSimpleFill } from "react-icons/pi";
import { FaReact, FaHtml5, FaCss3, FaNode } from "react-icons/fa";
import { SiMongodb, SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { AiOutlineJavaScript } from "react-icons/ai";
import { StaticImageData } from "next/image";
import ExpenseTracker from "@/public/expense-tracker.png";
import AimTrainer from "@/public/aim-trainer-1.png";
import ManageLandingPage from "@/public/manage-landing-page.png";
import ProductCart from "@/public/product-cart.png";
import BentoGrid from "@/public/bento-grid.png";
import BlogPage from "@/public/blog-page.png";
import GithubAccountFinder from "@/public/github-account-finder.png";
import Aavatech from "@/public/aavatech.png"

export type SkillDataType = {
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
};
export type ExperienceDataType = {
  title: string;
  subtitle: string;
  description: string;
  icon: JSX.Element;
};

export type EducationDataType = {
  title: string;
  subtitle: string;
  description: string;
  grade: string;
};

export type ProjectDataType = {
  title: string;
  description: string;
  img: StaticImageData;
  projectLink: string | object;
};

export const experiences: ExperienceDataType[] = [
  {
    title: "Frontend Developer",
    subtitle: "Imark Digital Pvt. Ltd. (Aug, 2024 - 3 Months Internship)",
    description:
      "In my role at Imark Digital, I collaborated with designers and backend developers to deliver responsive web applications. I focused on ensuring a seamless user experience and optimized performance across various devices.",
    icon: <PiBagSimpleFill size={24} />,
  },
  {
    title: "Fullstack Developer",
    subtitle: "Aavatech Nepal (Nov, 2024 - Currently Employed)",
    description: "In my role at Aavatech Nepal, I implemented responsive and well-structured web applications, and handled API creation and integrations in Node.js and React ecosystems. I developed scalable solutions that improved system efficiency and user experience.",
    icon: <PiBagSimpleFill size={24} />,
  }
];

export const education: EducationDataType[] = [
  {
    title: "Bachelor of Science in Computer Science and Engineering",
    subtitle: "BVC Engineering College (2020 - 2024)",
    grade: "8.42/10",
    description:
      "Completed a rigorous program that provided a strong foundation in programming, algorithms, and software development. Engaged in hands-on projects that enhanced my problem-solving abilities and practical skills.",
  },
  {
    title: "Intermediate (10+2) in Science",
    subtitle: "New Horizon EBSS (2018 - 2020)",
    grade: "3.42/4",
    description:
      "Developed a solid foundation in technology and science, which sparked my passion for web development and nurtured my analytical thinking.",
  },
  {
    title: "Secondary Education",
    subtitle: "New Horizon EBSS (2016 - 2018)",
    grade: "3.7/4",
    description:
      "Fostered foundational skills and a love for learning, laying the groundwork for my academic and professional growth in technology.",
  },
];

export const skills: SkillDataType[] = [
  {
    title: "Next.js",
    subtitle: "Full-Stack React Framework",
    description:
      "Skilled in using Next.js to create optimized, server-side rendered applications that enhance performance and SEO.",
    icon: <SiNextdotjs size={24} />,
  },
  {
    title: "React",
    subtitle: "Dynamic User Interface Library",
    description:
      "Experienced in React for building interactive and responsive user interfaces, improving user engagement in web applications.",
    icon: <FaReact size={24} />,
  },
  {
    title: "TypeScript",
    subtitle: "Statically Typed Superset of JavaScript",
    description:
      "Utilize TypeScript for building robust applications with type safety, enhancing maintainability and developer experience.",
    icon: <BiLogoTypescript size={24} />,
  },
  {
    title: "JavaScript",
    subtitle: "Core Web Programming Language",
    description:
      "Experienced in JavaScript for developing interactive features and functionalities in web applications.",
    icon: <AiOutlineJavaScript size={24} />,
  },
  {
    title: "Tailwind CSS",
    subtitle: "Utility-First CSS Framework",
    description:
      "Proficient in Tailwind CSS to streamline styling, allowing for rapid development while maintaining customization and quality.",
    icon: <RiTailwindCssFill size={24} />,
  },
  {
    title: "HTML",
    subtitle: "Standard Markup Language",
    description:
      "Proficient in HTML to structure and present content on the web, ensuring semantic clarity and accessibility.",
    icon: <FaHtml5 size={24} />,
  },
  {
    title: "CSS",
    subtitle: "Styling and Layout Language",
    description:
      "Adept in CSS for designing visually appealing and responsive web applications across various devices.",
    icon: <FaCss3 size={24} />,
  },
  {
    title: "MongoDB",
    subtitle: "NoSQL Database Management",
    description:
      "Skilled in MongoDB for efficient data storage and retrieval, leveraging its flexible schema for scalable applications.",
    icon: <SiMongodb size={24} />,
  },
  {
    title: "Node.js / Express",
    subtitle: "Runtime Environment / Web application Framework",
    description: "Skilled in Node.js and Express for building robust, scalable backend applications, leveraging their powerful middleware architecture for creating efficient and modular server-side solutions.",
    icon: <FaNode size={24} />
  }
];

export const projects: ProjectDataType[] = [
  {
    title: "Aavatech's Website",
    description: "The website for AavaTech Nepal built with Next.js",
    img: Aavatech,
    projectLink: "https://aavatechnepal.com/",
  },
  {
    title: "Expense Tracker",
    description:
      "A simple and effective way to keep track of your expenses. Register and Login to add your expenses. View your expense analytics by your expense categories.",
    img: ExpenseTracker,
    projectLink: "https://expense-tracker-sand-seven.vercel.app/",
  },
  {
    title: "Manage Landing Page",
    description:
      "The project is a fully responsive and attractive landing page for 'MANAGE'.",
    img: ManageLandingPage,
    projectLink: "https://aryan-79.github.io/manage-landing-page/",
  },
  {
    title: "Product List with Cart",
    description:
      "This project is a products list page where you can add and remove products from your cart. The changes are dynamically reflected in your cart, with the list of items, their count, and total amount.",
    img: ProductCart,
    projectLink:
      "https://product-list-with-cart-main-frontendmentor.vercel.app",
  },
  {
    title: "Bento Grid",
    description:
      "This project builds a complex layout while being fully responsive.",
    img: BentoGrid,
    projectLink: "https://bento-grid-tau.vercel.app",
  },
  {
    title: "AimTrainer",
    description:
      "Click and hit the targets. Register and Login with credentials or google account, Save your score, improve and beat your record.",
    img: AimTrainer,
    projectLink: "https://aim-trainer-jsbe.vercel.app",
  },
  {
    title: "Blog Page",
    description:
      "Register and login with credentials or github, View blogs posted by admin, learn more and contact to agency. (secret tip: use user as username and 123456 as password for admin access)",
    img: BlogPage,
    projectLink: "https://nextjs-blog-page-two.vercel.app",
  },
  {
    title: "Github Account Finder",
    description:
      "Type github username and find their public details like repository count, followers and following count, company, blog, location, and their joining date.",
    img: GithubAccountFinder,
    projectLink: "https://bento-grid-tau.vercel.app",
  },
];

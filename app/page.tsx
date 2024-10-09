"use client";
import AboutSection from "@/components/About";
import ContactSection from "@/components/Contact";
import HeroSection from "@/components/Hero";
import Navbar from "@/components/Navbar";
import ProjectsSection from "@/components/Projects";
import Script from "next/script";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Script src="/scripts.js" />
    </>
  );
}

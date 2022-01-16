import React from "react";
import Hero from "./components/Hero";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import LangCert from "./components/LangCert";
import Projects from "./components/Projects";
import WorkSkills from "./components/WorkSkills";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Education />
      <LangCert />
      <WorkSkills />
      <Projects />
      <Footer />
    </>
  );
}

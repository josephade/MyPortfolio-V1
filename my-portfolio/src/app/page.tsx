"use client";


import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactMe from "./components/ContactMe";

export default function Home() {
  return (
    <div
      className="bg-zinc-800 text-white h-screen snap-y snap-mandatory
      overflow-y-scroll overflow-x-hidden z-0 scrollbar scroll-track-gray-400/20 scroll-thumb-[#FBAB0A]-500/80" 
    >

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id="hero" className="snap-start">
        <Hero />
      </section>
      
      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-center">
        <Experience />  
      </section>

      {/* Skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact" className="snap-start">
        <ContactMe />
          Hey
        </section>
    </div>
  );
}
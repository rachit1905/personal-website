"use client";
import Header from "./components/Header";
import Greet from "./components/Greet";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Achievements from "./components/Achievements";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    if (!IntersectionObserver) return;

    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hide");
            observer.unobserve(entry.target)
          }
        });
      },
      { threshold: 0.3 }
    );
    let el = document.querySelector(".site").childNodes;
    el.forEach((child) => observer.observe(child));
  }, []);

  return (
    <div className="site">
      <Header />
      <Greet />
      <About />
      <Achievements/>
      <Projects />
      <Contact />
    </div>
  );
}

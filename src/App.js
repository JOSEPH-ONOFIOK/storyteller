import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "./App.css";

import { FaSpotify, FaApple, FaInstagram, FaYoutube } from "react-icons/fa";
import heroImage from "./assets/images/oracle-portrait.jpeg";
import albumCover from "./assets/images/oracle-portrait.jpeg";
import bioImage from "./assets/images/oracle-portrait.jpeg";

const App = () => {
  const typedRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Oracle the Storyteller", "Gen Z Meets Millennial Wisdom"],
      typeSpeed: 50,
      backSpeed: 25,
      backDelay: 2000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const fadeElements = gsap.utils.toArray(".fade-section");
    fadeElements.forEach((el) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: el,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  useEffect(() => {
    const updateProgressBar = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
    };
    window.addEventListener("scroll", updateProgressBar);
    return () => window.removeEventListener("scroll", updateProgressBar);
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress-bar" ref={progressRef}></div>

      <nav className="navbar">
        <a href="#" className="logo">
          Oracle
        </a>
        <ul className="nav-links">
          <li><a href="#welcome">Welcome</a></li>
          <li><a href="#latest">Latest</a></li>
          <li><a href="#bio">Bio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-left fade-section">
          <h1 ref={typedRef}></h1>
          <p>Blending Gen Z energy with millennial wisdom.</p>
          <a href="#latest" className="cta">Listen Now</a>
        </div>
        <div className="hero-right" style={{ backgroundImage: `url(${heroImage})` }}></div>
      </header>

      <section id="welcome" className="fade-section welcome-section parallax">
        <div className="welcome-content">
          <h2>Welcome to Oracle's World</h2>
          <p>Dive into the unique sound that bridges generations.</p>
        </div>
      </section>

      <section id="latest" className="fade-section latest-release parallax">
        <h2>Latest Release</h2>
        <div className="album-container">
          <img src={albumCover} alt="Oracle Album" />
          <div className="stream-links">
            <a href="#"><FaSpotify /> Spotify</a>
            <a href="#"><FaApple /> Apple Music</a>
          </div>
        </div>
      </section>

      <section id="bio" className="fade-section bio parallax">
        <div className="bio-img">
          <img src={bioImage} alt="Oracle Bio" />
        </div>
        <div className="bio-text">
          <h2>Meet Oracle</h2>
          <p>Oracle is a visionary storyteller, blending generational voices through rhythm and rhyme. With influences that span decades, Oracle creates timeless music that resonates deeply with all.</p>
        </div>
      </section>

      <section id="contact" className="fade-section contact parallax">
        <h2>Connect with Oracle</h2>
        <div className="contact-icons">
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaYoutube /></a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Oracle Music. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

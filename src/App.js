import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import {
  FaSpotify,
  FaApple,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaBars,
  FaTimes,
} from "react-icons/fa";

import "./App.css";

import heroImage from "./assets/images/oracle-portrait.jpeg";
import albumCover from "./assets/images/big.jpeg";
import bioImage from "./assets/images/oracle-portrait.jpeg";
import comingSoonImage from "./assets/images/album.jpeg";
import audiomackLogo from "./assets/images/audiomack-icon.webp"; // <- Make sure this path is correct

const App = () => {
  const progressRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

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
            invalidateOnRefresh: true,
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
        <a href="#" className="logo">Oracle</a>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><a href="#welcome" onClick={() => setMenuOpen(false)}>Welcome</a></li>
          <li><a href="#latest" onClick={() => setMenuOpen(false)}>Latest</a></li>
          <li><a href="#coming-soon" onClick={() => setMenuOpen(false)}>Coming Soon</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>
      </nav>

      <header className="hero">
        <div className="hero-left fade-section">
          <h1 className="hero-title">Oracle the Storyteller</h1>
          <p>Blending Gen Z energy with millennial wisdom.</p>
          <a href="#latest" className="cta">Listen Now</a>
        </div>
      </header>

      <section id="welcome" className="fade-section bio parallax">
        <div className="bio-img">
          <img src={bioImage} alt="Oracle Bio" />
        </div>
        <div className="bio-text">
          <h2>Meet Oracle</h2>
          <p>
            Welcome to ORACLE RECORDS, the home of storytelling fans. Oracle shares his experience through music. Join our group chat to discuss your favorite sounds, participate in giveaways, or simply make new friends. Whether you're here to listen or share your story — you're welcome. Stay tuned! 🐐
          </p>
        </div>
      </section>

      <section id="latest" className="fade-section latest-release parallax">
        <h2>Latest Release</h2>
        <div className="album-container">
          <img src={albumCover} alt="Oracle Album" />
          <div className="stream-links">
            <a href="https://open.spotify.com/album/22VayDuIQtwVeZ3skPn94L?si=md330L9gQn2o7Lj4XrWuOQ" target="_blank" rel="noopener noreferrer"><FaSpotify /> Spotify</a>
            <a href="#" target="_blank" rel="noopener noreferrer"><FaApple /> Apple Music</a>
             <a href="https://audiomack.com/oraclethestoryteller" target="_blank" rel="noopener noreferrer">
            <img src={audiomackLogo} alt="Audiomack" style={{ width: "24px", height: "24px", verticalAlign: "middle" }} /> Audiomack
          </a>
          </div>
        </div>
      </section>

      <section id="coming-soon" className="fade-section coming-soon parallax">
        <h2>Coming Soon</h2>
        <p>Get ready for Oracle’s next masterpiece — dropping soon. Stay tuned for the vibe!</p>
        <img src={comingSoonImage} alt="Upcoming Project" />
      </section>

      <section id="contact" className="fade-section contact parallax">
        <h2>Connect with Oracle</h2>
        <div className="contact-icons">
          <a href="https://www.instagram.com/oraclethestoryteller?igsh=dXhhODJmOXNld3Q0&utm_source=qr" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          <a href="https://youtube.com/@oracledstoryteller?si=0i_2NqT0OHT_UOYY" target="_blank" rel="noopener noreferrer"><FaYoutube /></a>
          <a href="https://x.com/umohralph?s=11" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
         
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Oracle Music. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

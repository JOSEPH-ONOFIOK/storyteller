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
import CountdownTimer from "./CountdownTimer";

import heroImage from "./assets/images/oracle-portrait.jpeg";
import albumCover from "./assets/images/big.jpeg";
import bioImage from "./assets/images/oracle-portrait.jpeg";
import comingSoonImage from "./assets/images/album.jpeg";
import audiomackLogo from "./assets/images/audiomack-icon.webp";
import slyvesterImage from "./assets/images/slyvester.jpeg";

const App = () => {
  const progressRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.utils.toArray(".fade-section").forEach((el) => {
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
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      if (progressRef.current) {
        progressRef.current.style.width = `${scrollPercent}%`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="App">
      <div className="scroll-progress-bar" ref={progressRef} />

      <nav className="navbar">
        <a href="#" className="logo">Oracle</a>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          {["Welcome", "Latest", "Coming Soon", "Contact"].map((text) => (
            <li key={text}>
              <a href={`#${text.toLowerCase().replace(" ", "-")}`} onClick={() => setMenuOpen(false)}>
                {text}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <header className="hero fade-section">
        <div className="hero-left">
          <h1 className="hero-title">Oracle the Storyteller</h1>
          <p>Blending Gen Z energy with millennial wisdom.</p>
          <a href="#latest" className="cta">Listen Now</a>
        </div>
      </header>

      <section id="welcome" className="fade-section bio parallax">
        <div className="bio-img">
          <img src={bioImage} alt="Oracle Portrait" />
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
          <img src={albumCover} alt="Oracle Album Cover" />
          <div className="stream-links">
            <iframe
              title="Oracle Spotify Player"
              style={{ borderRadius: "12px", marginBottom: "1rem" }}
              src="https://open.spotify.com/embed/track/4avUbEXg7dwwqP6CUbjsDX?utm_source=generator"
              width="100%"
              height="80"
              frameBorder="0"
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            ></iframe>
            <a href="https://open.spotify.com/album/22VayDuIQtwVeZ3skPn94L?si=md330L9gQn2o7Lj4XrWuOQ" target="_blank" rel="noopener noreferrer">
              <FaSpotify /> Spotify
            </a>
            <a href="https://music.apple.com/gb/artist/oraclethestoryteller/1822190403" target="_blank" rel="noopener noreferrer">
              <FaApple /> Apple Music
            </a>
           <a href="https://audiomack.com/oraclethestoryteller" target="_blank" rel="noopener noreferrer">
            <img src={audiomackLogo} alt="Audiomack" style={{ width: "24px", height: "24px", verticalAlign: "middle" }} /> Audiomack
          </a>
          </div>
        </div>
      </section>

      <section id="coming-soon" className="fade-section coming-soon parallax">
        <h2>Coming Soon</h2>
        <p>Get ready for Oracle’s next masterpiece — dropping soon. Stay tuned for the vibe!</p>
        <img src={comingSoonImage} alt="Upcoming Project Artwork" className="coming-soon-img" />

        <div className="teaser">
          <h3>SLYvester (Money Dey Come, Money Dey Go) – August 1, 2025</h3>
          <img src={slyvesterImage} alt="SLYvester Cover" className="slyvester-img" />
          <CountdownTimer targetDate="2025-08-01T00:00:00" />
        </div>
      </section>

      <section id="contact" className="fade-section contact parallax">
        <h2>Connect with Oracle</h2>
        <div className="contact-icons">
          <a href="https://www.instagram.com/oraclethestoryteller?igsh=dXhhODJmOXNld3Q0&utm_source=qr" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://youtube.com/@oracledstoryteller?si=0i_2NqT0OHT_UOYY" target="_blank" rel="noopener noreferrer">
            <FaYoutube />
          </a>
          <a href="https://x.com/umohralph?s=11" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
        </div>
      </section>

      <footer className="footer">
        <p>&copy; 2025 Oracle Music. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;

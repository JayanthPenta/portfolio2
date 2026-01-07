
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./../components/Navbar";
import Hero from "./../components/Hero";
import About from "./../components/About";
import Skills from "./../components/Skills";
import Projects from "./../components/Projects";
import Contact from "./../components/Contact";
import Footer from "./../components/Footer";
import Experience from "./../components/Experience";

import AOS from "aos";
import "aos/dist/aos.css";


function LandingPage() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({  duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-out-cubic",
      offset: 120, });
  }, []);

  return (
      <div className={darkMode ? "dark" : ""}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen">
          
          <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

          {/* 🔀 ROUTES START HERE */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <About />
                  <Skills />
                  <Experience />
                  <Projects />
                  <Contact />
                </>
              }
            />

            {/* 👇 SAME PAGE PROJECT VIEW */}
            <Route path="/project/:slug" element={<Projects />} />
          </Routes>

          <Footer />
        </div>
      </div>
  );
}

export default LandingPage;


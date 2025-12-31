// import { useEffect, useState } from "react";
// import { Routes, Route , useLocation } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";


// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Skills from "./components/Skills";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";



// export default function App() {
//   const location = useLocation();

//    const [darkMode, setDarkMode] = useState(true);

//   // useEffect(() => {
//   //   const root = document.documentElement;
//   //   if (darkMode) {
//   //     root.classList.add("dark");
//   //     localStorage.setItem("theme", "dark");
//   //   } else {
//   //     root.classList.remove("dark");
//   //     localStorage.setItem("theme", "light");
//   //   }
//   // }, [darkMode]);

//   useEffect(() => {
//     AOS.init({ duration: 1000,  easing: "ease-in-out", once: true, offset: 100 });
//   }, []);

//   useEffect(() => {
//     AOS.refresh();
//   }, [location]);

//   return (
//     <>
//        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

//       <Routes>
//         {/* Home Page */}
//         <Route
//           path="/"
//           element={
//             <>
//               <Hero />
//               <About />
//               <Skills />
//               <Projects />
//               <Contact />
//             </>
//           }
//         />

//         {/* Project Page */}
//           <Route path="/project/:slug" element={<Projects />} />
//       </Routes>

//       <Footer />
//     </>
//   );
// }


import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

import AOS from "aos";
import "aos/dist/aos.css";


function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
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

export default App;


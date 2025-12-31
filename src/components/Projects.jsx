// import { Link, useParams } from "react-router-dom";

// const projects = [
//   {
//     name: "Clock",
//     slug: "clock",
//     image: "/clock/clock.jpg",
//     url: "/clock/clock.html",
//   },
//   {
//     name: "Calculator",
//     slug: "calculator",
//     image: "/calculator/calc.jpg",
//     url: "/calculator/calc.html",
//   },
//   {
//     name: "Stopwatch",
//     slug: "stopwatch",
//     image: "/stopwatch/stopwatch.jpg",
//     url: "/stopwatch/stopwatch.html",
//   },
//   {
//     name: "Music Player",
//     slug: "music",
//     image: "/musically/music.png",
//     url: "/musically/music.html",
//   },
//   {
//     name: "Foodie Magic",
//     slug: "foodie",
//     image: "/assets/logo.jpeg",
//     url: "https://foodiemagicres.netlify.app",
//   },
//   {
//     name: "FlipMart",
//     slug: "flipmart",
//     image: "/assets/flipmart.jpg",
//     url: "https://jayanths-flipmart-shop.netlify.app",
//   },
// ];

// export default function Projects() {
//   const { slug } = useParams();
//   const selectedProject = projects.find(p => p.slug === slug);

//   /* ================= PROJECT VIEW ================= */
//   if (slug && selectedProject) {
//     return (
//       <section className="h-screen bg-black">
//         <div className="h-16 px-4 flex items-center gap-4 bg-gray-900">
//           <Link
//             to="/"
//             className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-400"
//           >
//             ← Back
//           </Link>
//           <h2 className="text-xl font-bold text-teal-400">
//             {selectedProject.name}
//           </h2>
//         </div>

//         <iframe
//           src={selectedProject.url}
//           title={selectedProject.name}
//           className="w-full h-[calc(100vh-4rem)] border-none"
//         />
//       </section>
//     );
//   }

//   /* ================= PROJECT LIST ================= */
//   return (
//     <section id="projects" className="py-20 bg-gray-900">
//       <h2 className="text-3xl font-bold text-center mb-10 text-teal-400">
//         Projects
//       </h2>

//       <div className="max-w-6xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-6">
//         {projects.map(project => (
//           <Link
//             key={project.slug}
//             to={`/project/${project.slug}`}
//             className="group relative rounded-xl overflow-hidden bg-gray-800 shadow-lg"
//           >
//             <div
//               className="h-52 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
//               style={{ backgroundImage: `url(${project.image})` }}
//             />

//             <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
//               <span className="text-lg font-bold text-teal-400">
//                 View Project
//               </span>
//             </div>

//             <div className="p-4 text-center">
//               <h3 className="text-xl font-bold text-white">
//                 {project.name}
//               </h3>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </section>
//   );
// }



const projects = [
  {
    name: "Clock",
    image: "/clock/clock.jpg",
    live: "/clock/clock.html",
    github: "https://github.com/JayanthPenta/Clock",
    tech: [ "JavaScript","HTML", "CSS", "Netlify"],
    description:
      "A visually clean and responsive digital clock built with HTML, CSS, and JavaScript, updating time in real-time."
  },
  {
    name: "Calculator",
    image: "/calculator/calc.jpg",
    live: "/calculator/calc.html",
    github: "https://github.com/JayanthPenta/Calculator",
    tech: ["JavaScript","HTML", "CSS", "Netlify"],
    description:
      "A responsive calculator application built using HTML, CSS, and JavaScript that performs basic arithmetic operations with accurate and user-friendly interactions."
  },
  {
    name: "Stopwatch",
    image: "/stopwatch/stopwatch.jpg",
    live: "/stopwatch/stopwatch.html",
    github: "https://github.com/JayanthPenta/Stopwatch",
    tech: ["JavaScript","HTML", "CSS", "Netlify"],
    description:
     "A JavaScript-based stopwatch application with start, pause, reset, and lap functionality, designed with a clean and responsive user interface."  
   },
   {
    name: "Musically",
    image: "/musically/music.png",
    live: "/musically/mjusic.html",
    github: "https://github.com/JayanthPenta/Musically",
    tech: ["JavaScript","HTML", "CSS", "Netlify"],
    description:
      "A browser-based music player built using HTML, CSS, and JavaScript that allows users to play, pause, and navigate audio tracks with an intuitive UI."
  },
  {
    name: "Foodie Magic",
    image: "/assets/logo.jpeg",
    live: "https://foodiemagicres.netlify.app",
    github: "https://github.com/JayanthPenta/Foodie-Magic",
    tech: ["React", "JavaScript", "CSS", "TailwindCSS", "Netlify"],
    description:
      "Restaurant website designed with a focus on responsiveness and user-friendly navigation.",
  },
  {
    name: "FlipMart",
    image: "/assets/flipmart.jpg",
    live: "https://jayanths-flipmart-shop.netlify.app",
    github: "https://github.com/JayanthPenta/Flip-Mart",
    tech: ["React", "JavaScript", "CSS", "Netlify", "TailwindCSS"],
    description:
      "A responsive e-commerce frontend with dynamic product listings and clean UI interactions.",
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-900 px-6">
      <h2 className="text-3xl font-bold text-center text-teal-400 mb-12">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map(project => (
          <div
            key={project.name}
            className="
              bg-gray-800
              rounded-2xl
              overflow-hidden
              shadow-lg
              transition-all duration-300
              hover:-translate-y-[2px]
              hover:shadow-teal-500/30
            "
          >
            <img
              src={project.image}
              alt={project.name}
              className="h-56 w-full object-cover"
            />

            <div className="p-6">
              <h3 className="text-xl font-bold text-white">
                {project.name}
              </h3>

              <p className="text-gray-400 mt-3">
                {project.description}
              </p>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map(t => (
                  <span
                    key={t}
                    className="px-3 py-1 text-sm
                    bg-teal-500/20 text-teal-400
                    rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4 mt-6">
                <a
                  href={project.live}
                  target="_blank"
                  className="
                    px-4 py-2
                    bg-teal-500 text-black
                    rounded-lg
                    hover:bg-teal-400
                    transition
                  "
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  className="
                    px-4 py-2
                    border border-teal-500
                    text-teal-400
                    rounded-lg
                    hover:bg-teal-500 hover:text-black
                    transition
                  "
                >
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

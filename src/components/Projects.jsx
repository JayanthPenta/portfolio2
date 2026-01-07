const projects = [
  {
    name: "Clock",
    image: "/clock/clock.jpg",
    live: "/clock/clock.html",
    github: "https://github.com/JayanthPenta/Clock",
    tech: ["JavaScript", "HTML", "CSS", "Netlify"],
    description:
      "A visually clean and responsive digital clock built with HTML, CSS, and JavaScript, updating time in real-time.",
  },
  {
    name: "Calculator",
    image: "/calculator/calc.jpg",
    live: "/calculator/calc.html",
    github: "https://github.com/JayanthPenta/Calculator",
    tech: ["JavaScript", "HTML", "CSS", "Netlify"],
    description:
      "A responsive calculator application built using HTML, CSS, and JavaScript that performs basic arithmetic operations with accurate and user-friendly interactions.",
  },
  {
    name: "Stopwatch",
    image: "/stopwatch/stopwatch.jpg",
    live: "/stopwatch/stopwatch.html",
    github: "https://github.com/JayanthPenta/Stopwatch",
    tech: ["JavaScript", "HTML", "CSS", "Netlify"],
    description:
      "A JavaScript-based stopwatch application with start, pause, reset, and lap functionality, designed with a clean and responsive user interface.",
  },
  {
    name: "Musically",
    image: "/musically/music.png",
    live: "/musically/mjusic.html",
    github: "https://github.com/JayanthPenta/Musically",
    tech: ["JavaScript", "HTML", "CSS", "Netlify"],
    description:
      "A browser-based music player built using HTML, CSS, and JavaScript that allows users to play, pause, and navigate audio tracks with an intuitive UI.",
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
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      data-aos="fade-up"
      className="py-20 px-6 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <h2 className="text-3xl font-bold text-center mb-12 text-teal-600 dark:text-teal-400">
        Projects
      </h2>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {projects.map((project, i) => (
          <div
            key={project.name}
            data-aos="fade-up"
            data-aos-delay={i * 100}
            className="
              rounded-2xl overflow-hidden
              bg-white dark:bg-gray-800
              shadow-lg dark:shadow-black/40
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
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                {project.name}
              </h3>

              <p className="mt-3 text-gray-600 dark:text-gray-400">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="
                      px-3 py-1 text-sm rounded-full
                      bg-teal-500/20 text-teal-600
                      dark:text-teal-400
                    "
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
                    px-4 py-2 rounded-lg
                    bg-teal-500 text-black
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
                    px-4 py-2 rounded-lg
                    border border-teal-500
                    text-teal-600 dark:text-teal-400
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

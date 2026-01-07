export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
      data-aos="fade-up"
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6 text-teal-600 dark:text-teal-400">
          About Me
        </h2>

        <p className="text-xl leading-relaxed text-gray-700 dark:text-gray-300">
          Frontend Developer specializing in building responsive and
          user-focused web applications using React.js, JavaScript (ES6),
          HTML5, CSS3, Bootstrap, and Tailwind CSS. Experienced in creating
          clean UI components, managing code with Git/GitHub, and deploying
          projects via Netlify, with a strong understanding of modern
          frontend workflows.
        </p>
      </div>
    </section>
  );
}

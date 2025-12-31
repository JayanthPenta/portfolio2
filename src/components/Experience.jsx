export default function Experience() {
  return (
    <section
      id="experience"
      className="py-28 bg-gray-100 dark:bg-gray-900 px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold text-center text-teal-500 mb-20">
        Experience
      </h2>

      <div className="max-w-5xl mx-auto relative">
        {/* Vertical Line */}
        <div className="absolute left-4 top-0 h-full w-1 bg-teal-500/30 rounded hidden sm:block" />

        {/* Experience Card */}
        <div
          className="
            relative sm:pl-20
         bg-white dark:bg-gray-800
            rounded-3xl
            p-10 md:p-12
            shadow-xl
            transition-all duration-300 ease-out
            hover:-translate-y-2
            hover:shadow-teal-500/40
          "
        >
          {/* Timeline Dot 
          <div className="absolute left-2 top-10 hidden sm:block">
            <span className="block w-5 h-5 bg-teal-500 rounded-full border-4 border-white dark:border-gray-900" />
          </div>
         */}
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Full Stack Development Intern (Course)
          </h3>

          <p className="text-lg md:text-xl text-teal-500 font-medium mt-3">
            LTE Tech Soft, Hyderabad • Feb 2024 – Nov 2024
          </p>

          <ul className="mt-8 space-y-4 text-lg md:text-xl text-gray-700 dark:text-gray-300 list-disc list-inside">
            <li>
              Built responsive single-page applications using React, HTML5,
              CSS3, and JavaScript.
            </li>
            <li>
              Integrated RESTful APIs with Axios and Fetch, handling loading
              and error states efficiently.
            </li>
            <li>
              Managed component state and side effects using React Hooks
              (useState, useEffect).
            </li>
            <li>
              Deployed production-ready frontend applications on Netlify using
              CI/CD workflows.
            </li>
            <li>
              Collaborated in daily stand-ups, contributing solutions that
              improved application stability and UX.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

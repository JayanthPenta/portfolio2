import { useEffect, useState } from "react";

const roles = [
  "Frontend Developer",
  "React Developer",
  "Full Stack Developer",
];

export default function Hero() {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [char, setChar] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (char < roles[index].length) {
        setText((prev) => prev + roles[index][char]);
        setChar(char + 1);
      } else {
        setTimeout(() => {
          setText("");
          setChar(0);
          setIndex((index + 1) % roles.length);
        }, 1200);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [char, index]);

  return (
    <section
      id="home"
      data-aos="fade-up"
      className="mt-[73px] min-h-screen flex items-center justify-center
      bg-gray-100 dark:bg-gray-900
      text-gray-900 dark:text-white px-6"
    >
      <div className="flex flex-col items-center text-center space-y-6">

        {/* Profile Image */}
        <img
          src="assets/jay.jpg"
          alt="Jayanth"
          className="w-80 h-80 rounded-full border-4 border-teal-400 object-cover shadow-lg transition-all duration-300 ease-out hover:scale-[1.02] hover:shadow-[0_0_15px_rgba(20,184,166,0.6)] active:scale-[0.99]"
        />

        {/* Text */}
        <h1 className="text-3xl md:text-5xl font-bold">
          Hey I'm <span className="text-teal-400">Jayanth</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-500 dark:text-gray-400 h-8">
          I'm a <span className="text-teal-400">{text}</span>
        </p>

        {/* Resume Button */}
        <a
  href="/resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-block mt-4
    px-12 py-4
    rounded-xl
    bg-teal-500
    text-black font-semibold text-lg
    border-2 border-teal-500

    transition-all duration-300

    hover:bg-transparent
    hover:text-teal-400
    hover:shadow-[0_0_30px_rgba(20,184,166,0.9)]
  "
>
  Resume
</a>

      </div>
    </section>
  );
}

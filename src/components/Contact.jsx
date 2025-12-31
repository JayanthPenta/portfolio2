// import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

// export default function Contact() {

//   return (
//     <section id="contact" className="py-20" data-aos="fade-up">
//       {/* <h2 className="text-3xl font-bold text-center mb-10 text-teal-400">
//         Contact Me
//       </h2> */}
//         <section
//       id="contact"
//       className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
//     >
//       <div className="max-w-5xl mx-auto px-6 text-center">

//         {/* Heading */}
//         <h2 className="text-3xl font-bold mb-10 text-teal-400">
//           Contact Me
//         </h2>

//         {/* Contact Cards */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//           {/* Email */}
//           <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-teal-500 dark:hover:bg-teal-500">
//             <FaEnvelope className="text-2xl text-teal-400 group-hover:text-black" />
//             <a
//               href="mailto:jayanthpenta@gmail.com"
//               className="group-hover:text-black break-all"
//             >
//               jayjayanth345@gmail.com
//             </a>
//           </div>

//           {/* Phone */}
//           <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-teal-500 dark:hover:bg-teal-500">
//             <FaPhoneAlt className="text-2xl text-teal-400 group-hover:text-black" />
//             <span>+91 9347038049</span>
//           </div>

//           {/* GitHub */}
//           <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-teal-500 dark:hover:bg-teal-500">
//             <FaGithub className="text-2xl text-teal-400 group-hover:text-black" />
//             <a
//               href="https://github.com/JayanthPenta"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-teal-400"
//             >
//               GitHub
//             </a>
//           </div>

//           {/* LinkedIn */}
//           <div className="flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 ease-out hover:-translate-y-2 hover:bg-teal-500 dark:hover:bg-teal-500 hover:text-black">
//             <FaLinkedin className="text-2xl text-teal-400 group-hover:text-black" />
//             <a
//               href="https://www.linkedin.com/in/jayanth-penta-a69118249"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="hover:text-teal-400"
//             >
//               LinkedIn
//             </a>
//           </div>

//         </div>
//       </div>
//     </section>
//       <form className="max-w-xl mx-auto space-y-4 px-6">
//         <input className="w-full p-3 rounded bg-gray-800" placeholder="Name" />
//         <input className="w-full p-3 rounded bg-gray-800" placeholder="Email" />
//         <textarea className="w-full p-3 rounded bg-gray-800" placeholder="Message" />
//         <button className="w-full bg-teal-500 py-3 rounded text-black font-bold">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }



import { FaEnvelope, FaPhoneAlt, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white"
      data-aos="fade-up"
    >
      <div className="max-w-5xl mx-auto px-6 text-center">

        <h2 className="text-3xl font-bold mb-10 text-teal-400">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Email */}
          <div className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 hover:-translate-y-2 hover:bg-teal-400 dark:hover:bg-teal-400">
            <FaEnvelope className="text-2xl text-teal-400 group-hover:text-black" />
            <a
              href="mailto:jayjayanth345@gmail.com"
              className="font-bold group-hover:text-black break-all"
            >
              jayjayanth345@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 hover:-translate-y-2 hover:bg-teal-500 dark:hover:bg-teal-400">
            <FaPhoneAlt className="text-2xl text-teal-400 group-hover:text-black" />
            <span className="font-bold group-hover:text-black">
              +91 9347038049
            </span>
          </div>

          {/* GitHub */}
          <div className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 hover:-translate-y-2 hover:bg-teal-500 dark:hover:bg-teal-400">
            <FaGithub className="text-2xl text-teal-400 group-hover:text-black" />
            <a
              href="https://github.com/JayanthPenta"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold group-hover:text-black"
            >
              GitHub
            </a>
          </div>

          {/* LinkedIn */}
          <div className="group flex items-center gap-4 p-6 bg-white dark:bg-gray-800 rounded-xl shadow transition-all duration-300 hover:-translate-y-2 hover:bg-teal-500 dark:hover:bg-teal-400">
            <FaLinkedin className="text-2xl text-teal-400 group-hover:text-black" />
            <a
              href="https://www.linkedin.com/in/jayanth-penta-a69118249"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold group-hover:text-black"
            >
              LinkedIn
            </a>
          </div>

        </div>
      </div>
      <br/>
      <br/>
      <form className="max-w-xl mx-auto space-y-4 px-6">
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Name" />
        <input className="w-full p-3 rounded bg-gray-800" placeholder="Email" />
        <textarea className="w-full p-3 rounded bg-gray-800" placeholder="Message" />
        <button className="w-full bg-teal-500 py-3 rounded text-black font-bold">
          Send Message
        </button>
      </form>
    </section>
  );
}

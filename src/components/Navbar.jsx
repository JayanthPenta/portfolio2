// import { Link, useLocation, useNavigate } from "react-router-dom";
// import { useState } from "react";

// export default function Navbar({ darkMode, setDarkMode }) {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [open, setOpen] = useState(false);

//   const isProjectPage = location.pathname.startsWith("/project");

//   const links = ["home", "about", "skills","experience", "projects", "contact"];

//   return (
//     <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
//       <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

//         {/* LOGO */}
//         <Link to="/" className="text-3xl font-bold text-teal-400">
//           Jayanth <span className="text-2xl font-bold text-white">Penta</span>
//         </Link>

//         {/* 🔙 PROJECT PAGE → ONLY BACK BUTTON */}
//         {isProjectPage ? (
//           <button
//             onClick={() => navigate("/")}
//             className="px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-400 transition"
//           >
//             ← Back
//           </button>
//         ) : (
//           <>
//             {/* DESKTOP NAV */}
//             <ul className="hidden md:flex gap-8">
//               {links.map(link => (
//                 <li
//                   key={link}
//                   onClick={() => {
//                     document
//                       .getElementById(link)
//                       ?.scrollIntoView({ behavior: "smooth" });
//                     setOpen(false);
//                   }}
//                   className="cursor-pointer hover:text-teal-400 capitalize"
//                 >
//                   {link}
//                 </li>
//               ))}
//             </ul>

//             {/* RIGHT CONTROLS */}
//             <div className="flex items-center gap-4">
//               {/* DARK MODE */}
//               <button
//                 onClick={() => setDarkMode(!darkMode)}
//                 className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700"
//               >
//                 {darkMode ? "☀️" : "🌙"}
//               </button>

//               {/* ☰ MOBILE MENU */}
//               <button
//                 onClick={() => setOpen(!open)}
//                 className="md:hidden text-2xl"
//               >
//                 ☰
//               </button>
//             </div>
//           </>
//         )}
//       </div>

//       {/* 📱 MOBILE MENU */}
//       {!isProjectPage && open && (
//         <div className="md:hidden bg-black px-6 pb-4 text-center space-y-4">
//           {links.map(link => (
//             <div
//               key={link}
//               onClick={() => {
//                 document
//                   .getElementById(link)
//                   ?.scrollIntoView({ behavior: "smooth" });
//                 setOpen(false);
//               }}
//               className="cursor-pointer hover:text-teal-400 capitalize"
//             >
//               {link}
//             </div>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }



import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isProjectPage = location.pathname.startsWith("/project");
  const links = ["home", "about", "skills", "experience", "projects", "contact"];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="text-3xl font-bold text-teal-400">
          Jayanth <span className="text-white text-2xl">Penta</span>
        </Link>

        {/* PROJECT PAGE → BACK BUTTON */}
        {isProjectPage ? (
          <button
            onClick={() => navigate("/")}
            className="px-4 py-2 bg-teal-500 text-black rounded-lg hover:bg-teal-400 transition"
          >
            ← Back
          </button>
        ) : (
          <>
            {/* DESKTOP NAV */}
            <ul className="hidden md:flex gap-8">
              {links.map((link) => (
                <li
                  key={link}
                  onClick={() => scrollToSection(link)}
                  className="relative cursor-pointer capitalize group"
                >
                  <span className="transition-colors duration-300 ease-out group-hover:text-teal-400">
                    {link}
                  </span>

                  {/* underline animation */}
                  <span
                    className="
                      absolute
                      left-1/2
                      -bottom-1
                      h-[2px]
                      w-full
                      bg-teal-400
                      transform
                      -translate-x-1/2
                      scale-x-0
                      origin-center
                      transition-transform
                      duration-300
                      ease-out
                      group-hover:scale-x-100
                    "
                  />
                </li>
              ))}
            </ul>

            {/* RIGHT CONTROLS */}
            <div className="flex items-center gap-4">
              {/* DARK MODE */}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="text-xl p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              >
                {darkMode ? "☀️" : "🌙"}
              </button>

              {/* MOBILE TOGGLE */}
              <button
                onClick={() => setOpen(!open)}
                className="md:hidden text-2xl"
              >
                ☰
              </button>
            </div>
          </>
        )}
      </div>

      {/* MOBILE MENU */}
      {!isProjectPage && open && (
        <div className="md:hidden bg-black px-6 pb-4 text-center space-y-4">
          {links.map((link) => (
            <div
              key={link}
              onClick={() => scrollToSection(link)}
              className="relative inline-block cursor-pointer capitalize group"
            >
              <span className="transition-colors duration-300 group-hover:text-teal-400">
                {link}
              </span>

              <span
                className="
                  absolute
                  left-1/2
                  -bottom-1
                  h-[2px]
                  w-full
                  bg-teal-400
                  transform
                  -translate-x-1/2
                  scale-x-0
                  origin-center
                  transition-transform
                  duration-300
                  ease-out
                  group-hover:scale-x-100
                "
              />
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}

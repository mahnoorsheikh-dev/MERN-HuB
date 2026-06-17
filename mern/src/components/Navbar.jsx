import { Link } from "react-router-dom";

export default function Navbar() {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Projects", href: "/projects" },
    { name: "Topics", href: "/topic" },
  ];

  return (
    <nav className="bg-[#1E1E2F] text-[#E0E0E0] px-4 md:px-8 py-5 border-b border-[#00BFA6]">
      <div className="flex flex-col lg:flex-row items-center gap-4">

        <div>
          <h2 className="text-2xl font-bold text-[#00BFA6]">
            MERN-HuB
          </h2>
        </div>

        <div className="flex-1 w-full lg:px-6">
          <input
            type="text"
            placeholder="Search topics and resources..."
            className="w-full py-2 px-4 rounded-xl bg-[#111827] text-[#E0E0E0] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.href}
              className="hover:bg-[#207166] py-2 px-4 rounded-xl hover:text-white transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </div>

      </div>
    </nav>
  );
}
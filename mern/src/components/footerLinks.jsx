import { Link } from "react-router-dom";
import { Twitter, Github, Linkedin } from "lucide-react";

export default function FooterLinks() {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Projects", href: "/projects" },
  ];

  const topicLinks = [
    { name: "Node.js", href: "/topic" },
    { name: "Express.js", href: "/topic" },
    { name: "React.js", href: "/topic" },
    { name: "MongoDB", href: "/topic" },
    { name: "JavaScript", href: "/topic" },
  ];

  return (
    <>
    <div className="bg-[#1E1E2F] text-[#E0E0E0] border-t border-[#00BFA6]">
      <div className="max-w-6xl mx-auto px-6 md:px-16 py-10 grid grid-cols-1 md:grid-cols-3 gap-10">

        <div>
          <h3 className="text-xl font-semibold text-[#00BFA6] mb-4">Navigation</h3>
          <div className="flex flex-col gap-2">
            {links.map((link) => (
              <Link key={link.name} to={link.href} className="hover:text-[#00BFA6] transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#00BFA6] mb-4">Topics</h3>
          <div className="flex flex-col gap-2">
            {topicLinks.map((topic) => (
              <Link key={topic.name} to={topic.href} className="hover:text-[#00BFA6] transition-colors">
                {topic.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-[#00BFA6] mb-4">Connect</h3>
          <div className="flex gap-4">
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-[#00BFA6] transition-colors">
              <Twitter size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-[#00BFA6] transition-colors">
              <Github size={20} />
            </a>
            <a href="#" target="_blank" rel="noreferrer" className="hover:text-[#00BFA6] transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p className="text-sm text-[#888888] mt-3">Follow us for updates</p>
        </div>

      </div>

      <div className="flex items-center gap-2 text-sm text-[#888888] justify-end px-6 md:px-16 py-4 border-t border-[#2f3030]">
        <span>Language:</span>
        <select className="bg-[#111827] text-[#E0E0E0] px-3 py-1 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#00BFA6]">
          <option>English</option>
          <option>Urdu</option>
        </select>
      </div>

    </div>
    </>
  );
}
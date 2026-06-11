import { Link } from "react-router-dom";

export default function Navbar() {

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Resources", href: "/resources" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Projects", href: "/projects" },
    { name: "Topic", href: "/topic" }
  ];

  const TopicsLinks = {
  Fundamentals: [
    { name: "Programming Languages", href: "/programming-languages" },
    { name: "Version Control", href: "/version-control" },
    { name: "Software Architecture", href: "/software-architecture" },
    { name: "Agile Methodologies", href: "/agile-methodologies" },
    { name: "Project Management", href: "/project-management" },
  ],

  Development: [
    { name: "Web Development", href: "/web-development" },
    { name: "Mobile Development", href: "/mobile-development" },
    { name: "Game Development", href: "/game-development" },
    { name: "API Development", href: "/api-development" },
    { name: "Database Management", href: "/database-management" },
    { name: "Software Testing", href: "/software-testing" },
  ],

  DataAndAI: [
    { name: "Data Science", href: "/data-science" },
    { name: "Machine Learning", href: "/machine-learning" },
    { name: "Artificial Intelligence", href: "/artificial-intelligence" },
    { name: "Big Data", href: "/big-data" },
  ],

  AdvancedTech: [
    { name: "Cloud Computing", href: "/cloud-computing" },
    { name: "Cybersecurity", href: "/cybersecurity" },
    { name: "DevOps", href: "/devops" },
    { name: "Containerization", href: "/containerization" },
    { name: "Microservices", href: "/microservices" },
    { name: "Serverless Architecture", href: "/serverless-architecture" },
    { name: "Blockchain", href: "/blockchain" },
    { name: "Internet of Things", href: "/internet-of-things" },
    { name: "Virtual Reality", href: "/virtual-reality" },
    { name: "Augmented Reality", href: "/augmented-reality" },
    { name: "Quantum Computing", href: "/quantum-computing" },
  ],

  Design: [
    { name: "UI/UX Design", href: "/ui-ux-design" },
    { name: "Software Development Tools", href: "/software-development-tools" },
  ]
};

  
  return (
    <nav className="bg-[#1E1E2F] text-[#E0E0E0] px-8 py-5 border-b border-[#00BFA6] flex items-center">

  <div className="flex items-center gap-3">
    <h2 className="text-2xl font-bold text-[#00BFA6] whitespace-nowrap">
      MERN-HuB
    </h2>
  </div>

<div className="flex-1 px-6 flex justify-center">
  <input
    type="text"
    placeholder="Search..."
    className="w-full max-w-2xl py-2 px-4 rounded-xl bg-[#111827] text-[#E0E0E0] placeholder-[#888888] focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
  />
</div>
  
  <div className="flex items-center gap-6">
        {navLinks.map((link, index) => (
          <Link
            key={index}
            to={link.href}
            className="hover:bg-[#207166] py-2 px-4 rounded-xl hover:text-white transition-colors whitespace-nowrap"
          >
            {link.name}
          </Link>
        ))}
      </div>

    </nav>
  );
}
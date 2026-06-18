import { Link } from "react-router-dom";

export default function HomeHero() {
  const stackname = "MERN Stack HuB";
  const day = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const date = new Date().toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
  const topics = [
    { name: "MongoDB", href: "/topic" },
    { name: "Express.js", href: "/topic" },
    { name: "React.js", href: "/topic" },
    { name: "Node.js", href: "/topic" },
  ];

  return (
    <div className="bg-[#111827] text-[#E0E0E0] p-10 rounded-3xl border border-[#2f3030] text-center shadow-lg shadow-[#00BFA6]/10 hover:shadow-[#00BFA6]/40 hover:border-[#00BFA6] hover:-translate-y-1 transition-all duration-300 w-full">
      <h1 className="font-extrabold text-5xl text-[#00BFA6] mb-4">
        Welcome to {stackname}
      </h1>
      <h2 className="text-lg text-[#E0E0E0] mb-1">Today is {day}</h2>
      <h3 className="text-sm text-[#A0A0A0] mb-6">{date}</h3>
      <div className="flex flex-wrap justify-center gap-4 mt-6">
        {topics.map((topic, index) => (
          <Link
            key={index}
            to={topic.href}
            className="px-4 py-2 rounded-full bg-[#1E1E2F] hover:bg-[#00BFA6] hover:text-[#111827] transition-colors"
          >
            {topic.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
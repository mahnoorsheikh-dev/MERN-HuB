import { projects } from "../data/projects";

const difficultyColor = {
  Beginner: "text-green-400 border-green-400",
  Intermediate: "text-yellow-400 border-yellow-400",
  Advanced: "text-red-400 border-red-400",
};

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] text-[#E0E0E0] p-8">
      <h1 className="text-4xl font-bold text-center text-[#00BFA6] mb-2">
        Project Ideas
      </h1>
      <p className="text-center text-[#888888] mb-10">
        25+ project ideas to practice and build your MERN skills
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl border border-[#2f3030] shadow-lg shadow-[#00BFA6]/10 hover:border-[#00BFA6] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-xl font-bold text-[#00BFA6]">
                {project.title}
              </h2>
              <span
                className={`text-xs border px-2 py-1 rounded-full shrink-0 ml-2 ${difficultyColor[project.difficulty]}`}
              >
                {project.difficulty}
              </span>
            </div>

            <p className="text-[#A0A0A0] text-sm mb-4">{project.description}</p>

            <div className="flex flex-wrap gap-2">
              {project.tech.split(", ").map((t, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#1E1E2F] border border-[#2f3030] px-2 py-1 rounded-full text-[#E0E0E0]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
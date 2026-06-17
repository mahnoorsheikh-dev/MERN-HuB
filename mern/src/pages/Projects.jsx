import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] text-[#E0E0E0] p-8">
      <h1 className="text-4xl font-bold text-center text-[#00BFA6] mb-10">
        Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl border border-[#2f3030] shadow-lg shadow-[#00BFA6]/10 hover:border-[#00BFA6] transition-all"
          >
            <h2 className="text-2xl font-bold text-[#00BFA6] mb-3">
              {project.title}
            </h2>

            <p className="mb-4">{project.description}</p>

            <p className="text-sm text-[#A0A0A0] mb-4">
              <strong>Tech:</strong> {project.tech}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1E1E2F] hover:bg-[#00BFA6] hover:text-black transition-colors"
              >
                GitHub
              </a>

              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-[#1E1E2F] hover:bg-[#00BFA6] hover:text-black transition-colors"
              >
                Live Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
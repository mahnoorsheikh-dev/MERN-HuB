export default function Roadmaps() {
  const roadmap = [
    "HTML & CSS",
    "JavaScript",
    "Git & GitHub",
    "React",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Authentication (JWT)",
    "REST APIs",
    "Deployment"
  ];

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] text-center mb-10">
        MERN Roadmap
      </h1>

      <div className="max-w-3xl mx-auto">
        {roadmap.map((step, index) => (
          <div
            key={index}
            className="bg-[#111827] border border-[#2f3030] rounded-xl p-4 mb-4"
          >
            <h2 className="font-bold">
              Step {index + 1}: {step}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}
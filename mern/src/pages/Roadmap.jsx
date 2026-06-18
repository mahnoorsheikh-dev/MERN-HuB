export default function Roadmap() {
  const roadmap = [
    {
      step: "HTML & CSS",
      desc: "Learn the building blocks of every website. Structure with HTML, style with CSS.",
    },
    {
      step: "JavaScript",
      desc: "Master the language of the web. Variables, functions, DOM, events, and ES6+.",
    },
    {
      step: "Git & GitHub",
      desc: "Learn version control to track your code and collaborate with others.",
    },
    {
      step: "React",
      desc: "Build modern UIs with components, props, state, and hooks.",
    },
    {
      step: "Node.js",
      desc: "Run JavaScript on the server and build backend applications.",
    },
    {
      step: "Express.js",
      desc: "Create REST APIs and handle routing and middleware with Express.",
    },
    {
      step: "MongoDB",
      desc: "Store and manage data using a NoSQL document database.",
    },
    {
      step: "Authentication (JWT)",
      desc: "Secure your apps with user login, registration, and JSON Web Tokens.",
    },
    {
      step: "REST APIs",
      desc: "Design and consume RESTful APIs connecting your frontend and backend.",
    },
    {
      step: "Deployment",
      desc: "Deploy your apps to the web using Vercel, Render, or Railway.",
    },
  ];

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] text-center mb-2">
        MERN Roadmap
      </h1>
      <p className="text-center text-[#888888] mb-10">
        Follow these steps in order to become a MERN stack developer
      </p>

      <div className="max-w-3xl mx-auto flex flex-col gap-4">
        {roadmap.map((item, index) => (
          <div
            key={index}
            className="flex gap-4 items-start bg-[#111827] border border-[#2f3030] rounded-xl p-5 hover:border-[#00BFA6] transition-all"
          >
            <div className="min-w-10 h-10 rounded-full bg-[#00BFA6] text-[#111827] font-bold flex items-center justify-center">
              {index + 1}
            </div>
            <div>
              <h2 className="font-bold text-lg text-[#00BFA6]">{item.step}</h2>
              <p className="text-[#A0A0A0] mt-1 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
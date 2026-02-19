import { FileCode, Atom, Server, Database, Router, Layers } from "lucide-react";

export default function HomeCards() {

  const cards = [
  {
    topic: "JavaScript",
    description:
      "Learn the fundamentals of JavaScript, including variables, functions, events, and DOM manipulation to build interactive web applications.",
    icon: FileCode
  },
  {
    topic: "React",
    description:
      "Understand how to build modern user interfaces with React using components, props, state, hooks, and reusable UI patterns.",
    icon: Atom
  },
  {
    topic: "Node.js",
    description:
      "Explore the backend capabilities of Node.js to create fast, scalable server-side applications using JavaScript.",
    icon: Server
  },
  {
    topic: "MongoDB",
    description:
      "Dive into NoSQL database concepts and MongoDB, including collections, documents, queries, and data modeling.",
    icon: Database
  },
  {
    topic: "Express.js",
    description:
      "Build scalable web applications and APIs with Express.js by handling routes, middleware, and server logic efficiently.",
    icon: Router
  },
  {
    topic: "Next.js",
    description:
      "Master Next.js to create optimized React applications with routing, server-side rendering, and performance enhancements.",
    icon: Layers
  }
];

  
  return (
    <div className="w-full max-w-[90%]">
      <h2 className="text-3xl text-[#00BFA6] font-bold mb-8 text-center">
        Topics & More
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {cards.map((topic, index) => {
          const Icon = topic.icon;

          return (
            <div
              key={index}
              className="bg-[#111827] p-6 rounded-2xl border border-[#2f3030] text-center cursor-pointer shadow-lg shadow-[#00BFA6]/10 hover:shadow-[#00BFA6]/40 hover:border-[#00BFA6] hover:-translate-y-1 transition-all duration-300">
              <Icon className="mx-auto mb-4 text-[#00BFA6]" size={42} />

              <h3 className="font-bold text-xl text-white">
                {topic.topic}
              </h3>

              <p className="text-[#E0E0E0] mt-2">
                {topic.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
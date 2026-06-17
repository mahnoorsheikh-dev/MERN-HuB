import { resources } from "../data/resources";

export default function Resources() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] text-center mb-8">
        Resources
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {resources.map((resource, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl border border-[#2f3030]"
          >
            <h2 className="text-xl font-bold text-[#00BFA6]">
              {resource.title}
            </h2>

            <p className="my-2">
              Category: {resource.category}
            </p>

            <a
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              className="text-[#00BFA6]"
            >
              Visit Resource
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
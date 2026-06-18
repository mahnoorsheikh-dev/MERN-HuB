import { useState } from "react";
import { resources } from "../data/resources";

const categories = [
   "All",
   "JavaScript",
   "React",
   "Node.js",
   "Express.js",
   "MongoDB",
   "Next.js",
   "TypeScript",
   "Tailwind CSS",
   "Git & GitHub",
   "JWT & Authentication",
   "REST APIs",
   "Deployment",

  ];

export default function Resources() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = resources.filter((r) => {
    const matchSearch =
      r.title.toLowerCase().includes(search.toLowerCase()) ||
      r.category.toLowerCase().includes(search.toLowerCase());
    const matchCategory = activeCategory === "All" || r.category === activeCategory;
    return matchSearch && matchCategory;
  });

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] text-center mb-2">
        Resources
      </h1>
      <p className="text-center text-[#888888] mb-8">
        Curated docs and videos to help you learn faster
      </p>

      {/* Search */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl bg-[#111827] border border-[#2f3030] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
        />
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition-colors ${
              activeCategory === cat
                ? "bg-[#00BFA6] text-[#111827] border-[#00BFA6] font-semibold"
                : "border-[#2f3030] text-[#E0E0E0] hover:border-[#00BFA6]"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {filtered.map((resource, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl border border-[#2f3030] hover:border-[#00BFA6] transition-all"
          >
            <span className="text-xs border border-[#2f3030] px-2 py-1 rounded-full text-[#888888] mb-3 inline-block">
              {resource.type}
            </span>
            <h2 className="text-lg font-bold text-[#00BFA6] mb-1">
              {resource.title}
            </h2>
            <p className="text-sm text-[#888888] mb-4">
              Category: {resource.category}
            </p>
            <a
              href={resource.link}
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-lg bg-[#1E1E2F] hover:bg-[#00BFA6] hover:text-black transition-colors text-sm inline-block"
            >
              Visit Resource →
            </a>
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#888888] mt-10">No resources found.</p>
      )}
    </div>
  );
}
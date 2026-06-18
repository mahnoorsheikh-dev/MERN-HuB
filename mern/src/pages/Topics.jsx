import { useState } from "react";
import { Link } from "react-router-dom";
import { topics } from "../data/topics";

const levelColor = {
  Beginner: "text-green-400 border-green-400",
  Intermediate: "text-yellow-400 border-yellow-400",
  Advanced: "text-red-400 border-red-400",
};

export default function Topics() {
  const [search, setSearch] = useState("");

  const filtered = topics.filter((topic) =>
    topic.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-[#E0E0E0] p-8">
      <h1 className="text-4xl font-bold text-center text-[#00BFA6] mb-2">
        Topics
      </h1>
      <p className="text-center text-[#888888] mb-8">
        Explore all technologies covered on MERN Hub
      </p>

      <div className="flex justify-center mb-10">
        <input
          type="text"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full max-w-xl bg-[#111827] border border-[#2f3030] rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {filtered.map((topic) => (
          <Link
            key={topic.id}
            to={`/topics/${topic.slug}`}
            className="bg-[#111827] p-6 rounded-2xl border border-[#2f3030] shadow-lg shadow-[#00BFA6]/10 hover:shadow-[#00BFA6]/40 hover:border-[#00BFA6] hover:-translate-y-1 transition-all duration-300"
          >
            <div className="flex justify-between items-start mb-3">
              <h2 className="text-2xl font-bold text-[#00BFA6]">
                {topic.title}
              </h2>
              <span className={`text-xs border px-2 py-1 rounded-full ${levelColor[topic.level]}`}>
                {topic.level}
              </span>
            </div>
            <p className="text-[#A0A0A0] text-sm">{topic.description}</p>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-[#888888] mt-10">No topics found.</p>
      )}
    </div>
  );
}
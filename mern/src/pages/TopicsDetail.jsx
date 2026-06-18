import { useParams, Link } from "react-router-dom";
import { topics } from "../data/topics";

const levelColor = {
  Beginner: "text-green-400 border-green-400",
  Intermediate: "text-yellow-400 border-yellow-400",
  Advanced: "text-red-400 border-red-400",
};

export default function TopicDetail() {
  const { slug } = useParams();
  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return (
      <div className="min-h-screen bg-[#1E1E2F] text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-[#00BFA6] mb-4">Topic Not Found</h1>
        <Link to="/topic" className="px-6 py-3 bg-[#00BFA6] text-black rounded-xl font-semibold">
          Back to Topics
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <div className="max-w-4xl mx-auto">

        {/* Back Button */}
        <Link
          to="/topic"
          className="inline-block mb-6 text-sm text-[#888888] hover:text-[#00BFA6] transition-colors"
        >
          ← Back to Topics
        </Link>

        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          <h1 className="text-4xl font-bold text-[#00BFA6]">{topic.title}</h1>
          <span className={`text-xs border px-3 py-1 rounded-full ${levelColor[topic.level]}`}>
            {topic.level}
          </span>
        </div>

        <p className="text-[#A0A0A0] mb-8">{topic.description}</p>

        {/* Content */}
        <div className="bg-[#111827] p-8 rounded-2xl border border-[#2f3030] mb-8">
          <h2 className="text-2xl font-bold text-[#00BFA6] mb-4">Overview</h2>
          <pre className="whitespace-pre-wrap text-[#E0E0E0] leading-8 font-sans">
            {topic.content}
          </pre>
        </div>

        {/* Resources */}
        <div className="bg-[#111827] p-8 rounded-2xl border border-[#2f3030]">
          <h2 className="text-2xl font-bold text-[#00BFA6] mb-4">
            Learning Resources
          </h2>
          <div className="flex flex-col gap-3">
            {topic.resources.map((resource, index) => (
              <a
                key={index}
                href={resource}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 px-4 py-3 bg-[#1E1E2F] rounded-xl border border-[#2f3030] hover:border-[#00BFA6] text-[#00BFA6] transition-all text-sm"
              >
                 {resource}
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
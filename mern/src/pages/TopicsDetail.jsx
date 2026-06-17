import { useParams } from "react-router-dom";
import { topics } from "../data/topics";

export default function TopicDetails() {
  const { slug } = useParams();

  const topic = topics.find((t) => t.slug === slug);

  if (!topic) {
    return <h1>Topic Not Found</h1>;
  }

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] mb-4">
        {topic.title}
      </h1>

      <p className="mb-4">{topic.description}</p>

      <h2 className="text-2xl font-semibold mb-2">
        Learning Resources
      </h2>

      <ul className="list-disc pl-6">
        {topic.resources.map((resource, index) => (
          <li key={index}>
            <a
              href={resource}
              target="_blank"
              rel="noreferrer"
              className="text-[#00BFA6]"
            >
              {resource}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
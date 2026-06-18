export default function About() {
  return (
    <div className="min-h-screen bg-[#1E1E2F] text-[#E0E0E0] p-8">
      <div className="max-w-4xl mx-auto">

        <h1 className="text-5xl font-bold text-[#00BFA6] mb-6 text-center">
          About MERN Hub
        </h1>

        <p className="text-lg leading-8 text-center mb-10">
          MERN Hub is a learning platform designed to help aspiring developers
          explore modern web development technologies through structured
          roadmaps, curated resources, practical projects, and AI-powered
          learning tools.
        </p>

        <div className="bg-[#111827] p-8 rounded-2xl border border-[#2f3030] mb-8">
          <h2 className="text-2xl font-bold text-[#00BFA6] mb-4">Our Mission</h2>
          <p>
            Our mission is to make learning web development simple, organized,
            and accessible by providing high-quality resources, technology
            guides, project inspiration, and developer roadmaps in one place.
          </p>
        </div>

        <div className="bg-[#111827] p-8 rounded-2xl border border-[#2f3030] mb-8">
          <h2 className="text-2xl font-bold text-[#00BFA6] mb-4">What You Can Find Here</h2>
          <div className="flex flex-col gap-3">
            {[
              "Technology Topics & Documentation",
              "MERN Learning Roadmaps",
              "Curated Developer Resources",
              "25+ Project Ideas for Practice",
              "AI Learning Assistant",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 bg-[#1E1E2F] px-4 py-3 rounded-xl border border-[#2f3030]"
              >
                <span className="text-[#00BFA6] font-bold">✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#111827] p-8 rounded-2xl border border-[#2f3030]">
          <h2 className="text-2xl font-bold text-[#00BFA6] mb-4">Built By</h2>
          <p>
            MERN Hub is being developed by Mahnoor Zahid as a portfolio project
            to help developers learn modern technologies while demonstrating
            full-stack development skills.
          </p>
        </div>

      </div>
    </div>
  );
}
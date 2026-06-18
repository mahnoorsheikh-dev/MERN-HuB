export default function HomeStats() {
  const stats = [
    { title: "Topics", value: "20+" },
    { title: "Resources", value: "100+" },
    { title: "Roadmaps", value: "10+" },
    { title: "Projects", value: "4+" },
  ];

  return (
    <div className="w-full max-w-[90%] mt-12">
      <h2 className="text-3xl font-bold text-[#00BFA6] text-center mb-8">
        Platform Statistics
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-[#111827] p-6 rounded-2xl border border-[#2f3030] text-center text-white"
          >
            <h3 className="text-3xl font-bold text-[#00BFA6]">{stat.value}</h3>
            <p className="mt-2">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
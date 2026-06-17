import { useState } from "react";

export default function AIAssistant() {
  const [question, setQuestion] = useState("");

  const handleSubmit = () => {
    if (!question.trim()) return;

    alert(`AI Question: ${question}`);
    setQuestion("");
  };

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] text-center mb-8">
        AI Assistant
      </h1>

      <div className="max-w-3xl mx-auto bg-[#111827] p-6 rounded-2xl border border-[#2f3030]">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask anything about MERN, AI, React, Node.js..."
          className="w-full h-40 p-4 rounded-xl bg-[#1E1E2F] border border-[#2f3030] resize-none focus:outline-none"
        />

        <button
          onClick={handleSubmit}
          className="mt-4 px-6 py-3 bg-[#00BFA6] text-black rounded-xl font-semibold hover:opacity-90"
        >
          Ask AI
        </button>
      </div>
    </div>
  );
}
import { Link } from "react-router-dom";

export default function HomeAI() {
  return (
    <div className="bg-[#111827] text-[#E0E0E0] p-8 rounded-3xl border border-[#2f3030] text-center shadow-lg shadow-[#00BFA6]/10 hover:shadow-[#00BFA6]/40 hover:border-[#00BFA6] hover:-translate-y-1 transition-all duration-300 w-1/4 shrink-0">
      <h2 className="font-extrabold text-2xl text-[#00BFA6] mb-4">Chatbot</h2>
      <p className="text-lg text-[#E0E0E0]">Click your Chatbot helper.</p>
      <Link
        to="/ai-assistant"
        className="px-4 py-2 rounded-full bg-[#1E1E2F] hover:bg-[#00BFA6] hover:text-[#111827] mt-6 flex justify-center transition-colors"
      >
        Chat AI
      </Link>
    </div>
  );
}
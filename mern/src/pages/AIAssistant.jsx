import { useState } from "react";

export default function AIAssistant() {
  const [messages, setMessages] = useState([]);
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    const userMessage = { role: "user", content: question };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-6",
          max_tokens: 1024,
          system:
            "You are a helpful assistant for MERN Hub, a learning platform for web developers. Help users learn JavaScript, React, Node.js, Express, MongoDB, and Next.js. Keep answers clear, beginner friendly, and practical.",
          messages: updatedMessages,
        }),
      });

      const data = await response.json();
      const aiMessage = {
        role: "assistant",
        content: data.content[0].text,
      };
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
        alert("Error fetching AI response:", error),
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] text-center mb-2">
        AI Assistant
      </h1>
      <p className="text-center text-[#888888] mb-8">
        Ask anything about JavaScript, React, Node.js, Express or MongoDB
      </p>

      <div className="max-w-3xl mx-auto bg-[#111827] rounded-2xl border border-[#2f3030] flex flex-col h-150">

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
          {messages.length === 0 && (
            <div className="text-center text-[#888888] mt-20">
              <p className="text-lg">👋 Hello! Ask me anything about MERN stack.</p>
            </div>
          )}
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "bg-[#00BFA6] text-[#111827] rounded-br-none"
                    : "bg-[#1E1E2F] text-[#E0E0E0] border border-[#2f3030] rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}
          {loading && (
            <div className="flex justify-start">
              <div className="bg-[#1E1E2F] border border-[#2f3030] px-4 py-3 rounded-2xl rounded-bl-none text-sm text-[#888888]">
                Thinking...
              </div>
            </div>
          )}
        </div>

        {/* Input */}
        <div className="p-4 border-t border-[#2f3030] flex gap-3">
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask anything about MERN stack... (Enter to send)"
            rows={2}
            className="flex-1 p-3 rounded-xl bg-[#1E1E2F] border border-[#2f3030] resize-none focus:outline-none focus:ring-2 focus:ring-[#00BFA6] text-sm"
          />
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="px-6 py-3 bg-[#00BFA6] text-black rounded-xl font-semibold hover:opacity-90 disabled:opacity-50 self-end"
          >
            Send
          </button>
        </div>

      </div>
    </div>
  );
}
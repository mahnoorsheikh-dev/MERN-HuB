import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function AIAssistant() {
  const [messages, setMessages] = useState(() => {
    const saved = localStorage.getItem("mernhub-chat");
    return saved ? JSON.parse(saved) : [];
  });
  const [question, setQuestion] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem("mernhub-chat", JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = async () => {
    if (!question.trim()) return;

    const userMessage = { role: "user", content: question };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_GROQ_API_KEY}`,
        },
        body: JSON.stringify({
          model: "llama-3.3-70b-versatile",
          max_tokens: 1024,
          messages: [
            {
              role: "system",
              content: "You are MERN Bot, a helpful assistant for MERN Hub. Help users learn JavaScript, React, Node.js, Express, MongoDB, and Next.js. Keep answers clear and beginner friendly. Use markdown formatting in your responses.",
            },
            ...updatedMessages,
          ],
        }),
      });

      const data = await response.json();

      if (data.error) {
        throw new Error(data.error.message);
      }

      const aiMessage = {
        role: "assistant",
        content: data.choices[0].message.content,
      };
      setMessages([...updatedMessages, aiMessage]);
    } catch (error) {
      setMessages([
        ...updatedMessages,
        {
          role: "assistant",
          content: "Something went wrong. Please try again.",
        },
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

  const handleClear = () => {
    setMessages([]);
    localStorage.removeItem("mernhub-chat");
  };

  return (
    <div className="min-h-screen bg-[#1E1E2F] text-white p-8">
      <h1 className="text-4xl font-bold text-[#00BFA6] text-center mb-2">
        AI Assistant
      </h1>
      <p className="text-center text-[#888888] mb-8">
        Ask anything about JavaScript, React, Node.js, Express or MongoDB
      </p>

      <div className="max-w-3xl mx-auto bg-[#111827] rounded-2xl border border-[#2f3030] flex flex-col h-[600px]">

        {/* Header with clear button */}
        <div className="flex justify-between items-center px-6 py-3 border-b border-[#2f3030]">
          <span className="text-sm text-[#888888]">MERN Bot</span>
          <button
            onClick={handleClear}
            className="text-xs text-[#888888] hover:text-red-400 transition-colors"
          >
            Clear Chat
          </button>
        </div>

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
                {msg.role === "assistant" ? (
                  <ReactMarkdown
                    components={{
                      code: ({ children }) => (
                        <code className="bg-[#111827] text-[#00BFA6] px-1 py-0.5 rounded text-xs font-mono">
                          {children}
                        </code>
                      ),
                      pre: ({ children }) => (
                        <pre className="bg-[#111827] p-3 rounded-xl overflow-x-auto my-2 text-xs font-mono">
                          {children}
                        </pre>
                      ),
                      strong: ({ children }) => (
                        <strong className="text-[#00BFA6] font-bold">{children}</strong>
                      ),
                      h1: ({ children }) => (
                        <h1 className="text-lg font-bold text-[#00BFA6] mb-2">{children}</h1>
                      ),
                      h2: ({ children }) => (
                        <h2 className="text-base font-bold text-[#00BFA6] mb-2">{children}</h2>
                      ),
                      h3: ({ children }) => (
                        <h3 className="text-sm font-bold text-[#00BFA6] mb-1">{children}</h3>
                      ),
                      ul: ({ children }) => (
                        <ul className="list-disc pl-4 my-2 flex flex-col gap-1">{children}</ul>
                      ),
                      ol: ({ children }) => (
                        <ol className="list-decimal pl-4 my-2 flex flex-col gap-1">{children}</ol>
                      ),
                      p: ({ children }) => (
                        <p className="mb-2">{children}</p>
                      ),
                    }}
                  >
                    {msg.content}
                  </ReactMarkdown>
                ) : (
                  msg.content
                )}
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
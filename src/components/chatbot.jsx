import { useState } from "react";
import axios from "axios";
import { apiKey } from "../../secretKey";

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendMessage = async (message) => {
    setMessages([...messages, { text: message, sender: "user" }]);
    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: "You are a helpful travel assistant." },
            { role: "user", content: message },
          ],
          max_tokens: 150,
          temperature: 0.7,
        },
        {
          headers: { Authorization: `Bearer ${apiKey}` },
        }
      );

      const botResponse = response.data.choices[0].message.content.trim();
      setMessages([
        ...messages,
        { text: message, sender: "user" },
        { text: botResponse, sender: "bot" },
      ]);
    } catch (error) {
      console.error("Error fetching data from OpenAI API:", error);
      setError("Oops! Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSend = () => {
    if (input.trim()) {
      sendMessage(input);
      setInput("");
    }
  };

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 w-80 h-96 flex flex-col fixed bottom-20 right-4">
      <div className="flex-grow overflow-y-auto mb-2">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg ${
              msg.sender === "user"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 text-black self-start"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="flex items-center">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message"
          className="border rounded-l-md p-2 flex-grow"
        />
        <button
          onClick={handleSend}
          disabled={loading}
          className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 disabled:bg-gray-400"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;

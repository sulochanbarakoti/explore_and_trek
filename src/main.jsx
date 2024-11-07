import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Navbar from "./components/nav";
import Destination from "./pages/destination";
import Activities from "./pages/activities";
import PostDetails from "./pages/postDetails";
import Footer from "./components/footer";
import Contact from "./pages/contact";
import Chatbot from "./components/chatbot";

// import ErrorPage from "./error-page";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/destination", element: <Destination /> },
  { path: "/activities", element: <Activities /> },
  { path: "/contact", element: <Contact /> },
  { path: "/post/:id", element: <PostDetails /> },
]);

function App() {
  const [chatbotOpen, setChatbotOpen] = useState(false); // State to toggle chatbot

  return (
    <React.StrictMode>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />

      <button
        onClick={() => setChatbotOpen(!chatbotOpen)}
        className="fixed bottom-4 right-4 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        {chatbotOpen ? "Close Chat" : "Chat"}
      </button>

      {chatbotOpen && <Chatbot />}
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App />);

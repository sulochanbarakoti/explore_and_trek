import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import Navbar from "./components/nav";
import Destination from "./pages/destination";
import Activities from "./pages/activities";
import PostDetails from "./pages/postDetails";
import Footer from "./components/footer";
// import ErrorPage from "./error-page";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/destination", element: <Destination /> },
  { path: "/activities", element: <Activities /> },
  { path: "/post/:id", element: <PostDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
    <Footer />
  </React.StrictMode>
);

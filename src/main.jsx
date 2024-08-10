import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import Navbar from "./components/nav";
import Destination from "./routes/destination";
import Activities from "./routes/activities";

const router = createBrowserRouter([
  { path: "/", element: <Root /> },
  { path: "/destination", element: <Destination /> },
  { path: "/activities", element: <Activities /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);

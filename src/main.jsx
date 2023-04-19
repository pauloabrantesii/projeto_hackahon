import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { Navbar } from "../src/routes/Navbar";
import { Contact } from "../src/routes/Contact";
import { Info } from "../src/routes/Info";
import { ChatGPT } from "../src/routes/Chatbox";
import { Quiz } from "../src/routes/Quiz"

import { createBrowserRouter, RouterProvider } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "Navbar",
    element: <Navbar />,
  },

  {
    path: "Contact",
    element: <Contact />,
  },
  {
    path: "Info",
    element: <Info />,
  },
  {
    path: "Chat",
    element: <ChatGPT />,
  },
  {
    path: "Quiz",
    element: <Quiz />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

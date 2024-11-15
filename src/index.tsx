import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home/Home";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Pages/About/About";
import Articles from "./Pages/Articles/Articles";
import OpenSource from "./Pages/OpenSource/OpenSource";
import { ThemeProvider } from "next-themes";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/opensource",
        element: <OpenSource />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <ThemeProvider attribute="class">
      <RouterProvider router={router} />

      {/*  <App /> */}
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

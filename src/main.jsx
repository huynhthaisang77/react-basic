import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./components/pages/login.jsx";
import RegisterPage from "./components/pages/register.jsx";
import UserPage from "./components/pages/user.jsx";
import BookPage from "./components/pages/book.jsx";
import "./components/styles/global.css";
import TodoApp from "./components/todo/todoApp.jsx";
import ErrorPage from "./components/pages/error.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <TodoApp />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/books",
        element: <BookPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

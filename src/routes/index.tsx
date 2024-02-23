import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import SyllabusPage from "../pages/syllabus/SyllabusPage";
import CreateSyllabusPage from "../pages/syllabus/CreateSyllabusPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "dashboard",
        element: <MainLayout />,
        children: [
          {
            index: true,
            element: <HomePage />,
          },
          {
            path: "syllabus",
            element: <SyllabusPage />,
          },
          {
            path: "syllabus/create",
            element: <CreateSyllabusPage />,
          },
        ],
      },
    ],
  },
]);

export default routes;

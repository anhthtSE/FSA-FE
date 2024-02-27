import { createBrowserRouter } from "react-router-dom";
import AppLayout from "../components/layout/AppLayout";
import MainLayout from "../components/layout/MainLayout";
import LoginPage from "../pages/login/LoginPage";
import HomePage from "../pages/home/HomePage";
import SyllabusPage from "../pages/syllabus/SyllabusPage";
import ProgramPage from "../pages/program/ProgramPage";
import ClassPage from "../pages/class/ClassPage";
import CalendarPage from "../pages/calendar/CalendarPage";
import UserManagementPage from "../pages/manageUser/UserManagementPage";
import MaterialsPage from "../pages/material/MaterialsPage";
import SettingPage from "../pages/setting/SettingPage";
import CreateProgramPage from "../pages/program/CreateProgramPage";
import CreateSyllabusPage from "../pages/syllabus/CreateSyllabusPage";
import CreateClassPage from "../pages/class/CreateClassPage";
import UserManagementPermissionPage from "../pages/manageUser/UserManagementPermissionPage";
import SyllabusDetailPage from "../pages/syllabus/Detail/SyllabusDetailPage";

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
          {
            path: "syllabus/Detail",
            element: <SyllabusDetailPage />,
          },
          {
            path: "program",
            element: <ProgramPage />,
          },
          {
            path: "program/create",
            element: <CreateProgramPage />,
          },
          {
            path: "class",
            element: <ClassPage />,
          },
          {
            path: "class/create",
            element: <CreateClassPage />,
          },
          {
            path: "training",
            element: <CalendarPage />,
          },
          {
            path: "management",
            element: <UserManagementPage />,
          },
          {
            path: "management/premission",
            element: <UserManagementPermissionPage />,
          },
          {
            path: "material",
            element: <MaterialsPage />,
          },
          {
            path: "setting",
            element: <SettingPage />,
          },
        ],
      },
    ],
  },
]);

export default routes;

import { menuType } from "./config";
import {
  Biotech,
  CalendarToday,
  Group,
  Home,
  ImportContacts,
  School,
  Settings,
} from "@mui/icons-material";

const menuData: menuType[] = [
  {
    displayText: "Home",
    path: "/dashboard/",
    icon: <Home />,
    // child: [],
  },
  {
    displayText: "Syllabus",
    icon: <ImportContacts />,
    path: "/dashboard/syllabus",
    child: [
      {
        displayText: "View Syllabus",
        path: "/dashboard/syllabus",
      },
      {
        displayText: "Create Syllabus",
        path: "/dashboard/syllabus/create",
      },
    ],
  },
  {
    displayText: "Program",
    icon: <Biotech />,
    path: "/dashboard/program",
    child: [
      {
        displayText: "View Program",
        path: "/dashboard/program",
      },
      {
        displayText: "Create Program",
        path: "/dashboard/program/create",
      },
    ],
  },
  {
    displayText: "Class",
    icon: <School />,
    path: "/dashboard/class",
    child: [
      {
        displayText: "View Class",
        path: "/dashboard/class",
      },
      {
        displayText: "Create Class",
        path: "/dashboard/class/create",
      },
    ],
  },
  {
    displayText: "Training Calendar",
    path: "/dashboard/training",
    icon: <CalendarToday />,
    // child: [],
  },
  {
    displayText: "User Management",
    icon: <Group />,
    path: "/dashboard/management",
    child: [
      {
        displayText: "User List",
        path: "/dashboard/management",
      },
    ],
  },
  {
    displayText: "Learning Material",
    icon: <ImportContacts />,
    path: "/dashboard/material",
    // child: [],
  },
  {
    displayText: "Setting",
    icon: <Settings />,
    path: "/dashboard/setting",
    child: [
      {
        displayText: "Calendar",
        path: "/dashboard/setting",
      },
    ],
  },
];

export default menuData;

import { Outlet } from "react-router-dom";
import Siderbar from "../common/siderbar";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <Box display="flex">
      <Siderbar />
      <Outlet />
    </Box>
  );
};

export default MainLayout;

import Topbar from "../common/topbar/Topbar";
import Botbar from "../common/botbar/Botbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const AppLayout = () => {
  return (
    <>
      <Topbar />
      <Box height="100vh">
        <Outlet />
      </Box>
      <Botbar />
    </>
  );
};

export default AppLayout;

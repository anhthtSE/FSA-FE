import Topbar from "../common/Topbar";
import Botbar from "../common/Botbar";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const AppLayout = () => {
  return (
    <>
      <Topbar />
      <Box>
        <Outlet />
      </Box>
      <Botbar />
    </>
  );
};

export default AppLayout;

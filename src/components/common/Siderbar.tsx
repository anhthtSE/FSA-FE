import { Box, Button, Drawer, List, ListItemButton } from "@mui/material";
import React from "react";
import sizeConfig from "../../configs/sizeConfig";
import colorConfigs from "../../configs/colorConfigs";
import { Menu } from "@mui/icons-material";

const Siderbar = () => {
  return (
    <Box
      sx={{
        width: sizeConfig.siderbar.width,
        height: "100vh",
        bgcolor: colorConfigs.sidebar.bg,
        textAlign: "center",
      }}
    >
      <List>
        <ListItemButton>
          <Menu />
        </ListItemButton>
      </List>
    </Box>
  );
};

export default Siderbar;

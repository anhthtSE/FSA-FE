import { Box, List, ListItemButton } from "@mui/material";
import sizeConfig from "../../configs/sizeConfig";
import colorConfigs from "../../configs/colorConfigs";
import { Clear, Menu } from "@mui/icons-material";
import { useState } from "react";
import menuData from "./data/menuData";
import SiderbarIcon from "./SiderbarIcon";
import SiderbarItem from "./SiderbarItem";
import Show from "../../utils/Show";
import SiderbarItemCollapse from "./SiderbarItemCollapse";

const Siderbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Box
      sx={{
        width: sizeConfig.siderbar.width,
        height: "100vh",
        bgcolor: colorConfigs.sidebar.bg,
      }}
    >
      <List>
        <ListItemButton onClick={() => setOpen(!open)}>
          {!open ? <Menu /> : <Clear />}
        </ListItemButton>
        {menuData.map((sidebar, index) => (
          <Show key={index}>
            <Show.When isTrue={!open}>
              <SiderbarIcon
                key={index}
                item={sidebar}
                onClick={() => setOpen(!open)}
              />
            </Show.When>
            <Show.When isTrue={open && !!sidebar.child}>
              <SiderbarItemCollapse key={index} item={sidebar} />
            </Show.When>
            <Show.When isTrue={open && !sidebar.child}>
              <SiderbarItem open={open} key={index} item={sidebar} />
            </Show.When>
          </Show>
        ))}
      </List>
    </Box>
  );
};

export default Siderbar;

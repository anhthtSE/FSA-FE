import { useState } from "react";
import { menuType } from "./data/config";
import Show from "../../utils/Show";
import {
  Collapse,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { ExpandLessOutlined, ExpandMoreOutlined } from "@mui/icons-material";
import SiderbarItem from "./SiderbarItem";
import { Link } from "react-router-dom";

export interface Props {
  item: menuType;
}

const SiderbarItemCollapse = ({ item }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Show>
      <Show.When isTrue={!!(item.child && item.path)}>
        <ListItemButton
          onClick={() => setOpen(!open)}
          component={Link}
          to={item.path as string}
        >
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText
            disableTypography
            primary={<Typography>{item.displayText}</Typography>}
          />
          {open ? <ExpandLessOutlined /> : <ExpandMoreOutlined />}
        </ListItemButton>
        <Collapse in={open} timeout="auto">
          {item.child?.map((sidebar, index) => (
            <ListItemButton
              key={index}
              sx={{ width: "80%" }}
              component={Link}
              to={sidebar.path as string}
            >
              <ListItemText
                disableTypography
                primary={<Typography>{sidebar.displayText}</Typography>}
              />
            </ListItemButton>
          ))}
        </Collapse>
      </Show.When>
    </Show>
  );
};

export default SiderbarItemCollapse;

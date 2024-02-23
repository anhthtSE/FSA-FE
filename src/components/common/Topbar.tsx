import { AppBar, Avatar, Box, Toolbar, Typography } from "@mui/material";
import * as React from "react";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";

export interface ITopbarProps {}

export default class Topbar extends React.Component<ITopbarProps> {
  public render() {
    return (
      <AppBar
        position="static"
        sx={{
          boxShadow: "unset",
          backgroundColor: colorConfigs.mainBg.bg,
          color: colorConfigs.mainBg.color,
        }}
      >
        <Toolbar
          sx={{
            height: "6rem",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <img src={assets.images.logo} />
          <Box
            sx={{
              padding: "10px 0",
              display: "flex",
              backgroundColor: colorConfigs.secoundBG.bg,
              borderRadius: "25px",
              width: "140px",
              textTransform: "none",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ width: "2rem", height: "2rem" }}
              src={assets.images.icon}
              variant="square"
            />
            <Typography
              sx={{
                color: colorConfigs.button.colors,
              }}
            >
              uniGate
            </Typography>
          </Box>
        </Toolbar>
      </AppBar>
    );
  }
}

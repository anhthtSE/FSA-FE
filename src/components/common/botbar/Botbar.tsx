import { Toolbar } from "@mui/material";
import * as React from "react";
import colorConfigs from "../../../configs/colorConfigs";

export interface IBotbarProps {}

export default class Botbar extends React.Component<IBotbarProps> {
  public render() {
    return (
      <Toolbar
        sx={{
          width: "100%",
          position: "static",
          placeContent: "center",
          boxShadow: "unset",
          backgroundColor: colorConfigs.mainBg.bg,
          color: colorConfigs.mainBg.color,
          bottom: 0,
        }}
      >
        Copyright @2022 BA Warrior. All right reserved
      </Toolbar>
    );
  }
}

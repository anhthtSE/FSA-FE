import { Button, ButtonProps } from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";
import { ReactNode } from "react";

export interface Props extends ButtonProps {
  title: string;
  isSubmitting?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  icon?: ReactNode;
}

const ButtonUI = (props: Props) => {
  const buttonStyle = {
    height: "100%",
    backgroundColor: colorConfigs.button.bg,
    color: colorConfigs.button.colors,
    borderRadius: "17.5px",
    textTransform: "none",
    "&:hover": {
      backgroundColor: colorConfigs.button.hoverBg,
      color: colorConfigs.button.hoverColors,
    },
    "&:active": {
      backgroundColor: colorConfigs.button.activeBg,
      color: colorConfigs.button.activeColors,
    },
  };

  return (
    <Button
      fullWidth
      type="submit"
      onClick={props.onClick}
      sx={buttonStyle}
      disabled={props.isSubmitting}
    >
      {props.icon} &nbsp;
      {props.title}
    </Button>
  );
};

export default ButtonUI;

import { Button, ButtonProps } from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";

export interface Props extends ButtonProps {
  title: string;
  isSubmitting?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const ButtonUI = (props: Props) => {
  const buttonStyle = {
    backgroundColor: colorConfigs.button.bg,
    color: colorConfigs.button.colors,
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
      {props.title}
    </Button>
  );
};

export default ButtonUI;

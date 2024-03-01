import { Typography, TypographyProps } from "@mui/material";

export interface Props extends TypographyProps {
  title: string;
}

const TypographyUI = (props: Props) => {
  return (
    <Typography
      variant="h3"
      sx={{ fontWeight: "Inter", letterSpacing: "0.3rem" }}
    >
      {props.title}
    </Typography>
  );
};

export default TypographyUI;

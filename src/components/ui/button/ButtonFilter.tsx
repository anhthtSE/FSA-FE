import { Button } from "@mui/material";
import colorConfigs from "../../../configs/colorConfigs";
import { FilterAlt } from "@mui/icons-material";

const ButtonFilter = () => {
  return (
    <Button
      sx={{
        paddingLeft: 2,
        paddingRight: 2,
        borderRadius: "17.5px",
        bgcolor: colorConfigs.button.bg,
        color: colorConfigs.button.colors,
        "&:hover": {
          bgcolor: colorConfigs.button.hoverBg,
          color: colorConfigs.button.colors,
        },
      }}
    >
      <FilterAlt />
      Filter
    </Button>
  );
};

export default ButtonFilter;

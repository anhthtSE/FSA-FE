import { Box, Stack } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import TypographyUI from "../../components/ui/typography/TypographyUI";
import InputSearch from "../../components/ui/input/InputSearch";
import ButtonFilter from "../../components/ui/button/ButtonFilter";
import ButtonUI from "../../components/ui/button/ButtonUI";
import { Publish } from "@mui/icons-material";

const ClassPage = () => {
  return (
    <Box width="100%" position="relative">
      <Box
        width="100%"
        padding="20px 0px 20px 30px"
        bgcolor={colorConfigs.button.bg}
        border="solid #fff"
        color={colorConfigs.button.colors}
      >
        <TypographyUI title="Training class" />
      </Box>
      <Box width="100%" padding="20px 30px 20px 30px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <InputSearch />
            <ButtonFilter />
          </Stack>
          <Stack direction="row" width="10%" spacing={2}>
            <ButtonUI icon={<Publish />} title="Create Class" />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ClassPage;

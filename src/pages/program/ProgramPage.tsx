import { Box, Stack } from "@mui/material";
import TypographyUI from "../../components/ui/typography/TypographyUI";
import colorConfigs from "../../configs/colorConfigs";
import InputSearch from "../../components/ui/input/InputSearch";
import ButtonFilter from "../../components/ui/button/ButtonFilter";
import ButtonUI from "../../components/ui/button/ButtonUI";
import { ControlPoint, Publish } from "@mui/icons-material";

const ProgramPage = () => {
  return (
    <Box width="100%" position="relative">
      <Box
        width="100%"
        padding="20px 0px 20px 30px"
        bgcolor={colorConfigs.button.bg}
        border="solid #fff"
        color={colorConfigs.button.colors}
      >
        <TypographyUI title="Training program" />
      </Box>
      <Box width="100%" padding="20px 30px 20px 30px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <InputSearch />
            <ButtonFilter />
          </Stack>
          <Stack direction="row" width="20%" spacing={2}>
            <ButtonUI icon={<Publish />} title="Import" />
            <ButtonUI icon={<ControlPoint />} title="Add Syllabus" />
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProgramPage;

import { Box, Divider } from "@mui/material";
import TypographyUI from "../../components/ui/typography/TypographyUI";

const SyllabusPage = () => {
  return (
    <Box width="100%">
      <Box width="100%" padding="20px 0px 20px 30px">
        <TypographyUI title="Syllabus" />
      </Box>
      <Divider sx={{ borderBottom: "2px solid #000" }} />
    </Box>
  );
};

export default SyllabusPage;

import { Box, Button, Divider } from "@mui/material";
import TypographyUI from "../../components/ui/typography/TypographyUI";
import { useNavigate } from "react-router-dom";

const SyllabusPage = () => {
  const navigation = useNavigate();
  const handleSubmit = async () => {
    navigation("/dashboard/syllabus/Detail");
  };
  return (
    <Box width="100%">
      <Box width="100%" padding="20px 0px 20px 30px">
        <TypographyUI title="Syllabus" />
      </Box>
      <Divider sx={{ borderBottom: "2px solid #000" }} />
      <Button variant="outlined" onClick={handleSubmit}>Text</Button>
    </Box>
  );
};

export default SyllabusPage;

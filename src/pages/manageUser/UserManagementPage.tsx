import { Box, Stack } from "@mui/material";
import TypographyUI from "../../components/ui/typography/TypographyUI";
import InputSearch from "../../components/ui/input/InputSearch";
import ButtonFilter from "../../components/ui/button/ButtonFilter";
import ButtonUI from "../../components/ui/button/ButtonUI";
import { Publish } from "@mui/icons-material";
import Note from "../../components/ui/note/Note";

const UserManagementPage = () => {
  return (
    <Box width="100%" position="relative">
      <Box width="100%" padding="20px 0px 20px 30px" border="solid #fff">
        <TypographyUI title="User Management" />
      </Box>
      <Box width="100%" padding="20px 30px 20px 30px">
        <Stack flexDirection="row" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            <InputSearch />
            <ButtonFilter />
          </Stack>
          <Stack direction="row" width="10%" spacing={2}>
            <ButtonUI icon={<Publish />} title="Add User" />
          </Stack>
        </Stack>
        <Stack paddingTop={2} spacing={1} direction="row">
          <Note textSearch="foundation" />
          <Note textSearch="HaNTT2" />
          <Note textSearch="TES" />
        </Stack>
      </Box>
    </Box>
  );
};

export default UserManagementPage;

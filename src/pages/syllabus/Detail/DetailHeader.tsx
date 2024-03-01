import { Box, Typography } from "@mui/material";

const SyllabusDetailHeader = () => {
    return (
        <Box width="100%" padding="20px 0px 20px 30px">
            <Typography variant="h5" > Syllabus Detail</Typography>
            <div style={{ display: "flex" }}>
                <Typography
                    variant="h4"
                    fontWeight="bold"
                    letterSpacing="5px">
                    C# Programming language
                </Typography>
                <Typography
                    variant="body1"
                    color="white"
                    borderRadius="15px"
                    px="10px"
                    margin="0px 0px 15px 0px"
                    sx={{ backgroundColor: '#2D3748' }}>
                    Active
                </Typography>
            </div>
        </Box>
    );
};

export default SyllabusDetailHeader;
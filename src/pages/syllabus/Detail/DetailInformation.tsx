import { Box, Typography } from "@mui/material";

const SyllabusDetailInformation = () => {
    return (
        <Box width="100%" padding="20px 0px 20px 30px">
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <Typography variant="h5" fontWeight="bold">8</Typography>
                <Typography pb="1px" mx="2px">days</Typography>
                <Typography pb="1px" mx="10px" fontStyle="italic">(68 Hours)</Typography>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end" }}>
                <Typography mr="5px">Modified on</Typography>
                <Typography mr="5px" fontStyle="italic">23/07/2022</Typography>
                <Typography mr="5px">by</Typography>
                <Typography mr="5px" fontWeight="bold">Warrior Tran</Typography>
            </div>
        </Box>
    );
};

export default SyllabusDetailInformation;
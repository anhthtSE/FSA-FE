import { Box, Divider, Tab, Tabs } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import CustomTabPanel from "../../../components/ui/tab/CustomTabPanel";
import SyllabusDetailHeader from "./DetailHeader";
import SyllabusDetailInformation from "./DetailInformation";

const tabs = [
    {
        checkNumber: 1,
        title: "Tab1",
        tabName: "General",
    },
    {
        checkNumber: 2,
        title: "Tab2",
        tabName: "Outline",
    },
    {
        checkNumber: 3,
        title: "Tab3",
        tabName: "Others",
    },
];
const SyllabusPage = () => {
    const navigation = useNavigate();
    const [value, setValue] = React.useState(1);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <Box width="100%">
            <SyllabusDetailHeader></SyllabusDetailHeader>
            <Divider sx={{ borderBottom: "2px solid #000" }} />
            <SyllabusDetailInformation></SyllabusDetailInformation>
            <Box width="100%" padding="10px 0px 20px 30px">
                <Box mr="20px">
                    <Tabs value={value} onChange={handleChange} textColor="secondary">
                        {tabs.map((tab) => (
                            <Tab label={tab.tabName} />
                        ))}
                    </Tabs>
                    <Divider ></Divider>
                </Box>
                <CustomTabPanel value={value} index={0}>
                    Item One
                </CustomTabPanel>
                <CustomTabPanel value={value} index={1}>
                    Item Two
                </CustomTabPanel>
                <CustomTabPanel value={value} index={2}>
                    Item Three
                </CustomTabPanel>
            </Box>
        </Box >
    );
};

export default SyllabusPage;

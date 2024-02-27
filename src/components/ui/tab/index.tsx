import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import CustomTabPanel from "./CustomTabPanel";
import General from "./General";
import Outline from "./Outline";
import Others from "./Others";

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const LabTab = () => {
  const [value, setValue] = useState<number>(0);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const tabs = [
    { checkNumber: 0, tabLabel: "General" },
    { checkNumber: 1, tabLabel: "Outline" },
    { checkNumber: 2, tabLabel: "Others" },
  ];
  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          {tabs.map((tab) => (
            <Tab
              key={tab.checkNumber}
              label={tab.tabLabel}
              style={{
                backgroundColor:
                  tab.checkNumber === value ? "#2D3748" : "#6D7684",
                color: "#ffffff",
                fontWeight: tab.checkNumber === value ? "bold" : "normal",
                borderTopLeftRadius: "1rem",
                borderTopRightRadius: "1rem",
                margin: "0 .5rem 0 0",
                width: "15%",
              }}
              {...a11yProps(tab.checkNumber)}
            />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <General />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Outline />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Others />
      </CustomTabPanel>
    </Box>
  );
};

export default LabTab;

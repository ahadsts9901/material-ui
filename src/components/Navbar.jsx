import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';
import Pakistan from './Pakistan';

const CustomTabPanel = ({ value, index, children }) => {
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
};

const Navbar = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant="scrollable" scrollButtons="auto">
                    <Tab label="Pakistan" />
                    <Tab label="India" />
                    <Tab label="South Africa" />
                    <Tab label="Netherland" />
                    <Tab label="SriLanka" />
                    <Tab label="Australia" />
                    <Tab label="England" />
                    <Tab label="Newzealand" />
                    <Tab label="Bangladesh" />
                    <Tab label="Afghanistan" />
                </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <Pakistan />
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                Item Three
            </CustomTabPanel>
            <CustomTabPanel value={value} index={3}>
                Item Four
            </CustomTabPanel>
            <CustomTabPanel value={value} index={4}>
                Item Five
            </CustomTabPanel>
            <CustomTabPanel value={value} index={5}>
                Item Six
            </CustomTabPanel>
            <CustomTabPanel value={value} index={6}>
                Item Seven
            </CustomTabPanel>
            <CustomTabPanel value={value} index={7}>
                Item Eight
            </CustomTabPanel>
            <CustomTabPanel value={value} index={8}>
                Item Nine
            </CustomTabPanel>
            <CustomTabPanel value={value} index={9}>
                Item Ten
            </CustomTabPanel>
        </>
    );
};

export default Navbar;

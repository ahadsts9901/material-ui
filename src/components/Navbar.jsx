import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography } from '@mui/material';

import Pakistan from './Pakistan';
import India from './India';
import SouthAfrica from './SouthAfrica';
import Srilanka from './Srilanka';
import Australia from './Australia';
import England from './England';
import NewZealand from './NewZealand';
import Bangladesh from './Bangladesh';
import Afghanistan from './Afghanistan';
import Netherland from './Netherland';

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
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons="auto"
          className='navbar'
        >
          <Tab label="Pakistan" />
          <Tab label="India" />
          <Tab label="South Africa" />
          <Tab label="Netherlands" />
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
        <India />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <SouthAfrica />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Netherland />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Srilanka />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <Australia />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <England />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={7}>
        <NewZealand />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={8}>
        <Bangladesh />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={9}>
        <Afghanistan />
      </CustomTabPanel>
    </>
  );
};

export default Navbar;

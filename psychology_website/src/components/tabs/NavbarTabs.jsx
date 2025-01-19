import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useNavigate, useLocation } from 'react-router-dom';
import './navbar_tabs.syles.css'; // Import the CSS file

export default function BasicTabs() {
  const navigate = useNavigate(); // For navigating to routes
  const location = useLocation(); // To track the current route

  // Define tab-to-route mapping
  const routes = ['/','/about', '/approach', '/how-it-works', '/resources', '/blog'];

  // Find the active tab based on the current route
  const currentTab = routes.indexOf(location.pathname);
  const [value, setValue] = React.useState(currentTab === -1 ? 0 : currentTab);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(routes[newValue]); // Navigate to the selected route
  };

  return (
    <Box className="tabs-container">
      <Box sx={{  width: 'fit-content' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          className="tabs"
        >
          <Tab label="Home"/>
          <Tab label="About"/>
          <Tab label="Approach"/>
          <Tab label="How it works"/>
          <Tab label="Resources"/>
          <Tab label="Blog"/>
        </Tabs>
      </Box>
    </Box>
  );
}

'use client'
import React, { useState } from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import Collapse from '@mui/material/Collapse';
import Dashboard from './components/Dashboard';
import Box from '@mui/material/Box';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const LeftVerticalBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      
      light: {
        body: '#fff',
      },
      dark: {
        body: '#000',
      },
    },
  });


  document.body.style.backgroundColor = theme.palette[theme.palette.mode].body;

  return (
    <ThemeProvider theme={theme}>
      <main className='flex flex-row'>
        <div className="h-screen bg-[#2d3036] top-0 left-0 flex flex-col items-center justify-between w-16 relative">
          <div>
            <div className="cursor-pointer text-white mt-4 mb-4" onClick={toggleMenu}>
              <ChatBubbleOutlineIcon sx={{ fontSize: 40 }} />
            </div>

            <div className="icon cursor-pointer text-white">
              <PersonOutlineIcon sx={{ fontSize: 40 }} />
            </div>
            <div className="icon cursor-pointer text-white mt-4">
              <SettingsOutlinedIcon sx={{ fontSize: 40 }} />
            </div>
          </div>
          <div>
            <label className="switch mb-5">
            <input type="checkbox" onChange={toggleDarkMode} checked={darkMode} />
            <span className="slider"></span>
          </label>
          </div>
        </div>
        <div>
          <Box sx={{ width: '100%' }}>
            <Collapse orientation="horizontal" in={isMenuOpen}>
              <Dashboard />
            </Collapse>
          </Box>
          
        </div>
      </main>
    </ThemeProvider>
  );
};

export default LeftVerticalBar;


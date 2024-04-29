'use client'
import React, { useState, useEffect } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import { InputBase, IconButton, Paper } from '@mui/material';
import DetailsCard from './detailcard';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const Dashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState('');

  const data = [
    {
      id: 1,
      name: 'first last name',
      research: 'research topic',
      Details: 'last chat details',
      date: 'date of search',
    },
    {
      id: 2,
      name: 'first last name 2',
      research: 'research topic 2',
      Details: 'last chat details',
      date: 'date of search',
    },
    {
      id: 3,
      name: 'first last name 3',
      research: 'research topic 3',
      Details: 'last chat details',
      date: 'date of search',
    },
    {
      id: 4,
      name: 'first last name 4',
      research: 'research topic 4',
      Details: 'last chat details',
      date: 'date of search',
    },
    {
      id: 5,
      name: 'first last name 5',
      research: 'research topic 5',
      Details: 'last chat details',
      date: 'date of search',
    },
  ];

  
  useEffect(() => {
    setFilteredData(data);
  }, []);

  
  const filterData = () => {
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  
  useEffect(() => {
    filterData();
  }, [searchQuery]);

  return (
    <div className='dashboard'>
      <div className='mb-2'>
        <SearchBar onSearchChange={handleSearchChange} />
      </div>
      <div>
        {filteredData.length > 0 ? (
          filteredData.map((item, index) => (
            <DetailsCard
              key={index}
              name={item.name}
              research={item.research}
              details={item.Details}
              date={item.date}
            />
          ))
        ) : (
          <p>No results found</p>
        )}
      </div>
      
    </div>
  );
};

const SearchBar = ({ onSearchChange }) => {
  return (
    <Paper
      component="form"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 300,
        backgroundColor: '#333', 
        borderRadius: '20px', 
      }}
    >
      <InputBase
        sx={{
          ml: 1,
          flex: 1,
          color: 'white', 
        }}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={onSearchChange}
      />
      <IconButton type="submit" sx={{ p: '10px', color: 'white' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Dashboard;

import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';

const App = () => {
  return (
    <DataProvider>
      <Header/>
      <Box style={{marginTop:54}}>
        <Home/>
      </Box>
    </DataProvider>
  )
}

export default App
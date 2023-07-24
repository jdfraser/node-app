import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import ChatContainer from './containers/ChatContainer';

import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <ChatContainer />
    </ThemeProvider>
  );
}

export default App;

import React from 'react';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ChatContainer from './containers/ChatContainer';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App(props) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ChatContainer />
    </ThemeProvider>
  );
}

export default App;
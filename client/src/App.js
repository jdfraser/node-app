import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const SendButton = styled(Button)(() => ({
  marginLeft:'1em'
}))

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch('/api')
      .then(res => res.json())
      .then(data => setData(data.message));
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Container maxWidth={false}>
        <TextField 
            id="chat-input" 
            variant="outlined"
            label="Say something..."
            multiline
            maxRows={2}
            size="small"
        />
        <SendButton variant="contained" endIcon={<SendIcon />}>Send</SendButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;

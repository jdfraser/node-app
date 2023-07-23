import React from 'react';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import './App.css';
import { Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const SendButton = styled(Button)(() => ({
  marginLeft:'1em'
}))

function App() {
  const [message, setMessage] = React.useState('');
  const [messages, setMessages] = React.useState([]);

  const sendMessage = message => {
    fetch('/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: message
      })
    })
    .then(res => res.json())
    .then(data => setMessages(data.messages))
    .then(messages => console.log(messages));
  }

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  }

  return (
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Container maxWidth={false}>
        <Box>
          {messages.map((m) => (<p>{m}</p>))}
        </Box>
      </Container>
      <Container maxWidth={false}>
        <TextField 
          id="chat-input" 
          variant="outlined"
          label="Say something..."
          multiline
          maxRows={2}
          size="small"
          onChange={onMessageChange}
        />
        <SendButton 
          variant="contained" 
          endIcon={<SendIcon />} 
          onClick={() => { sendMessage(message) } }>
            Send
        </SendButton>
      </Container>
    </ThemeProvider>
  );
}

export default App;

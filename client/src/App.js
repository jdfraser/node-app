import React, {useEffect, useState} from 'react';
import Container from '@mui/material/Container';
import { ThemeProvider, createTheme, styled } from '@mui/material/styles';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

import './App.css';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    fetch('/messages', {
      method: 'GET'
    })
    .then(res => res.json())
    .then(data => setMessages(data.messages));
  }, [])

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
    .then(() => setMessage(''))
  }

  const onMessageChange = event => {
    setMessage(event.target.value);
  }

  const onSend = () => {
    sendMessage(message);
  }

  return (
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Container maxWidth={false}>
        <ChatWindow messages={messages} />
      </Container>
      <Container maxWidth={false}>
        <ChatInput 
          onMessageChange={onMessageChange} 
          onSend={onSend} 
          message={message} 
        />
      </Container>
    </ThemeProvider>
  );
}

export default App;

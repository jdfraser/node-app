import React, {useEffect, useState} from 'react';
import { ThemeProvider, createTheme, Box, Container } from '@mui/material';
import ChatWindow from './components/ChatWindow';
import ChatInput from './components/ChatInput';

import './App.css';
import NameSelector from './components/NameSelector';
import CurrentName from './components/CurrentName';

const theme = createTheme({
  palette: {
    mode: 'dark'
  },
});

const ownNameColor = "lime";
const otherNameColor = "#7c9dff";

function App() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [showNameSelector, setShowNameSelector] = useState(true);
  const [name, setName] = useState('');

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
        message: {name: name, text: message}
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

  const onNameChange = event => {
    setName(event.target.value);
  }

  const onNameSubmit = () => {
    setShowNameSelector(false);
  }

  return (
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <NameSelector 
        open={showNameSelector}
        onChange={onNameChange}
        onSubmit={onNameSubmit}
        ownNameColor={ownNameColor}
        name={name} 
      />
      <Container maxWidth={false}>
        <CurrentName name={name} />
      </Container>
      <Container maxWidth={false}>
        <ChatWindow 
          messages={messages} 
          ownNameColor={ownNameColor}
          otherNameColor={otherNameColor}
          name={name}
        />
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

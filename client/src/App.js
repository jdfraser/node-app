import React, {useEffect, useState} from 'react';
import { ThemeProvider, createTheme, Grid } from '@mui/material';
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
    if(message === '') {
      return;
    }

    setMessage('');

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

  const onNameSelectorClose = () => {
    setShowNameSelector(false);
  }

  const onEditName = () => {
    setShowNameSelector(true);
  }

  return (
    <ThemeProvider theme={theme}>
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <Grid container spacing={2} alignItems="center" justifyContent="center" direction="row">
        <Grid item xs={8}>
          <NameSelector 
            open={showNameSelector}
            onChange={onNameChange}
            onSubmit={onNameSubmit}
            onClose={onNameSelectorClose}
            ownNameColor={ownNameColor}
            name={name} 
          />
          <CurrentName name={name} onEdit={onEditName} />
          <ChatWindow 
            messages={messages} 
            ownNameColor={ownNameColor}
            otherNameColor={otherNameColor}
            name={name}
          />
        </Grid>
        <Grid item xs={8}>
          <ChatInput 
            onMessageChange={onMessageChange} 
            onSend={onSend} 
            message={message} 
          />
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default App;

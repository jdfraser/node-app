import React, {useEffect, useRef} from 'react';
import { Box } from '@mui/material';
import Message from './Message';
import PropTypes from 'prop-types';

export default function ChatWindow(props) {
    const messages = props.messages;
    const messagesEndRef = useRef(null)

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
        scrollToBottom();
    }, [messages])

    return (
        <Box 
        border="1px solid" 
        borderRadius="10px" 
        marginBottom="1em" 
        width="100%" 
        height="15em"
        fontFamily="Monospace"
        fontSize="16px"
        style={{
            overflowY: "scroll"
          }}
        >
            {messages.map((m, i) => (
            <Message 
              key={`message-${i}`} 
              message={m}
              ownNameColor={props.ownNameColor}
              otherNameColor={props.otherNameColor}
              name={props.name}
            />))}
            <div ref={messagesEndRef} />
        </Box>
    );
}

ChatWindow.propTypes = {
    ownNameColor: PropTypes.string,
    otherNameColor: PropTypes.string,
    name: PropTypes.string,
    messages: PropTypes.array
}
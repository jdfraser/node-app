import React, {useEffect, useRef} from 'react';
import { Box } from '@mui/material';
import Message from './Message';

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
            {messages.map((m, i) => (<Message key={`message-${i}`} message={m}/>))}
            <div ref={messagesEndRef} />
        </Box>
    );
}
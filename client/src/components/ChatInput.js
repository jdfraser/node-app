import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SendButton from './SendButton';
import PropTypes from 'prop-types';

export default function ChatInput(props) {
    const handleKeyDown = event => {
        if(event.key === 'Enter'){
            event.preventDefault();
            props.onSend();
        }
    }

    return (
        <Box>
            <TextField 
            id="chat-input" 
            variant="outlined"
            label="Say something..."
            multiline
            maxRows={2}
            size="small"
            onChange={props.onMessageChange}
            onKeyDown={handleKeyDown}
            value={props.message}
            />
            <SendButton onClick={props.onSend} />
        </Box>
    );
}

ChatInput.propTypes = {
    onSend: PropTypes.func,
    onMessageChange: PropTypes.func,
    message: PropTypes.string
}
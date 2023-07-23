import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import SendButton from './SendButton';

export default function ChatInput(props) {
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
            />
            <SendButton onSend={props.onSend} />
        </Box>
    );
}
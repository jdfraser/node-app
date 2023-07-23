import TextField from '@mui/material/TextField';
import {Grid} from '@mui/material';
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
        <Grid container spacing={2}>
            <Grid item xs={12} md={10} xl={11}>
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
                style={{width: "100%"}}
                />
            </Grid>
            <Grid item md={2} xl={1} sx={{display: {xs: 'none', md: 'block'}}}>
                <SendButton onClick={props.onSend} style={{width: "100%"}} />
            </Grid>
        </Grid>
    );
}

ChatInput.propTypes = {
    onSend: PropTypes.func,
    onMessageChange: PropTypes.func,
    message: PropTypes.string,
}
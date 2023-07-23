import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

export default function SendButton(props) {
    return (
        <Button 
          variant="contained"
          style={{marginLeft: "1em"}}
          endIcon={<SendIcon />} 
          onClick={props.onSend}>
            Send
        </Button>
    );
} 
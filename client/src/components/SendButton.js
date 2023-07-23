import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';

export default function SendButton(props) {
    return (
        <Button 
          variant="contained"
          endIcon={<SendIcon />} 
          onClick={props.onClick}
          style={props.style}
        >
            Send
        </Button>
    );
} 

SendButton.propTypes = {
    onClick: PropTypes.func,
    style: PropTypes.object
}
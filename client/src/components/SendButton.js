import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PropTypes from 'prop-types';

export default function SendButton(props) {
    return (
        <Button 
          variant="contained"
          style={{marginLeft: "1em"}}
          endIcon={<SendIcon />} 
          onClick={props.onClick}
        >
            Send
        </Button>
    );
} 

SendButton.propTypes = {
    onClick: PropTypes.func
}
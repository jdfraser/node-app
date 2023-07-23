import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function Message(props) {
    return (
        <Box margin="0.5em">
            <strong>{props.message.name}:</strong> {props.message.text}
        </Box>
    );
}

Message.propTypes = {
    message: PropTypes.string
}
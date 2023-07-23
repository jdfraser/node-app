import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function Message(props) {
    return (
        <Box margin="0.5em">
            {props.message}
        </Box>
    );
}

Message.propTypes = {
    message: PropTypes.string
}
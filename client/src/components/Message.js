import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function Message(props) {
    const getNameClass = name => {
        if(name === props.name) {
            return 'name-own';
        }

        return 'name-other';
    }

    return (
        <Box margin="0.5em">
            <span className={`${getNameClass(props.message.name)} name`}>
                {props.message.name}:
            </span>
            {props.message.text}
        </Box>
    );
}

Message.propTypes = {
    name: PropTypes.string,
    message: PropTypes.object
}
import { Box } from '@mui/material';
import PropTypes from 'prop-types';

export default function Message(props) {
    const getNameColor = name => {
        if(name === props.name) {
            return props.ownNameColor;
        }

        return props.otherNameColor;
    }

    return (
        <Box margin="0.5em">
            <strong 
              style={{color: getNameColor(props.message.name)}}
            >
                {props.message.name}:
            </strong> {props.message.text}
        </Box>
    );
}

Message.propTypes = {
    ownNameColor: PropTypes.string,
    otherNameColor: PropTypes.string,
    name: PropTypes.string,
    message: PropTypes.object
}
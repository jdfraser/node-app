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
            <span style={{
                color: getNameColor(props.message.name),
                marginRight: "0.5em"
                }}>
                {props.message.name}
            </span>
            {props.message.text}
        </Box>
    );
}

Message.propTypes = {
    name: PropTypes.string,
    message: PropTypes.object,
    ownNameColor: PropTypes.string,
    otherNameColor: PropTypes.string
}
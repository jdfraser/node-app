import { Box } from '@mui/material';

export default function Message(props) {
    return (
        <Box margin="0.5em">
            {props.message}
        </Box>
    );
}
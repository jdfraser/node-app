import PropTypes from 'prop-types';
import { Box } from '@mui/material';

export default function CurrentName(props) {
    return (
        <Box
          fontFamily="Monospace"
          fontSize="16px"
          marginBottom="0.5em"
        >
          <strong>Name: <div style={{color:"lime", display:"inline"}}>{props.name}</div></strong>
        </Box>
    );
}

CurrentName.propTypes = {
    name: PropTypes.string
}
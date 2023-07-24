import PropTypes from 'prop-types';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

export default function CurrentName(props) {
    return (
        <Box
          fontFamily="Monospace"
          fontSize="16px"
          marginBottom="0.5em"
        >
          <strong>Name: <div class='name-own' style={{display:"inline", marginRight:"0.5em"}}>{props.name}</div></strong>
          <Button onClick={props.onEdit}><EditIcon style={{fontSize:"16px"}}/></Button>
        </Box>
    );
}

CurrentName.propTypes = {
    name: PropTypes.string,
    onEdit: PropTypes.func
}
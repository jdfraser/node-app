import { TextField, Box, Backdrop, Dialog, DialogTitle, Button } from "@mui/material";
import PropTypes from 'prop-types';

export default function NameSelector(props) {
    const handleKeyDown = event => {
        if(event.key === 'Enter'){
            event.preventDefault();
            props.onSubmit();
        }
    }

    return (
        <Box>
            <Backdrop open={props.open} />
            <Dialog open={props.open}>
                <DialogTitle>Choose a Name</DialogTitle>
                <TextField 
                  style={{margin: "1em"}} 
                  onKeyDown={handleKeyDown}
                  onChange={props.onChange}
                  value={props.name}
                />
                <Button 
                  style={{margin: "1em", marginTop: "0em"}}
                  onClick={props.onSubmit}
                >
                  Ok
                </Button>
            </Dialog>
        </Box>
    );
}

NameSelector.propTypes = {
    open: PropTypes.bool,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    onClose: PropTypes.func,
    name: PropTypes.string
}
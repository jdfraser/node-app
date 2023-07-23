import { useRef } from 'react';
import { TextField, Box, Backdrop, Dialog, DialogTitle, Button } from "@mui/material";
import PropTypes from 'prop-types';

export default function NameSelector(props) {
    const dialogRef = useRef(null);

    const handleKeyDown = event => {
        switch(event.key) {
            case 'Enter':
                event.preventDefault();
                props.onSubmit();
                break;
            case 'Escape':
                event.preventDefault();
                props.onClose();
                break;
            default:
                break;
        }
    }

    const handleClick = event => {
        if(
            dialogRef.current && 
            dialogRef.current.contains(event.target)        ) {
            return;
        }

        event.preventDefault();
        props.onClose();
    }

    return (
        <Box>
            <Backdrop open={props.open} onClick={handleClick}>
                <Dialog open={props.open} onKeyDown={handleKeyDown}>
                    <div ref={dialogRef}>
                        <DialogTitle>Choose a Name</DialogTitle>
                        <Box>
                            <TextField 
                            style={{margin: "1em"}} 
                            onKeyDown={handleKeyDown}
                            onChange={props.onChange}
                            value={props.name}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Button 
                            style={{margin: "1em", marginTop: "0em"}}
                            onClick={props.onSubmit}
                            >
                            Ok
                            </Button>
                        </Box>
                    </div>
                </Dialog>
            </Backdrop>
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
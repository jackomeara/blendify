import { Dialog, Typography } from "@mui/material";

function HelpDialog({open, handleClose}) {
    return ( 
        <Dialog
        open={open}
        onClose={handleClose}
        >
            <Typography color='secondary' sx={{fontSize: '30px', padding: '20px'}}>How to use</Typography>
            <Typography sx={{fontSize: '24px', padding: '20px'}}>
                Give your playlist a name, and choose some seeds to create your playlist. Seeds can be songs, artists or genres.
                
            </Typography>

        </Dialog>
     );
}

export default HelpDialog;
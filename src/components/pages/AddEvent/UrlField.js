import React from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function UploadImg(props){
    return(
        <Stack sx={{flexDirection:"row"}}>
            <TextField
                fullWidth
                required
                id="image-url"
                label="Image URL"
                variant="filled"
                margin="dense"
                onChange={event=>props.setTempURL(event.target.value)}
            />
            <Button variant="outlined" onClick={()=>props.setURL(props.imgURLTemp)} sx={{margin: "2vh",color:"white"}}>
                Set
            </Button>
        </Stack>
    )
}

export default UploadImg
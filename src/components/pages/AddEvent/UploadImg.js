import React from 'react'
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';

function UploadImg(props){
    const Input = styled('input')({
        display: 'none',
    });
    return(
        <label htmlFor="contained-button-file">
            <Input accept="image/*" id="contained-button-file" multiple type="file" onChange={props.onChange}/>
            <Button variant="contained" component="span" sx={{margin: "2vh"}}>
                Open File
            </Button>
        </label>
    )
}

export default UploadImg
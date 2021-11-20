import React, { useState } from 'react'
import UploadImg from './UploadImg'
import UrlField from './UrlField'

import './AddEvent.css'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';

function ImageStack(props){

    const [switchTab,setTab] = useState(true)
    const [imgURLTemp,setTempURL] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png")

    const onChange = (e) => {       //copied code from https://codesandbox.io/s/wonderful-pine-i7fs3?file=/src/Demo.tsx:439-784
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
          props.setURL(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    return(
        <Stack 
        className="image-stack"
        alignItems="center">
            <div className="add-image">
                <img alt="error" style={{width:"100%",height:"100%",objectFit:"contain"}} src={props.imgURL}/>
            </div>
            <Tabs className="add-image-tab" 
                    variant="fullWidth">
                <Tab
                    onClick={() => setTab(true)} 
                    label="Upload"/>
                <Tab
                    onClick={() => setTab(false)} 
                    label="URL"/>
            </Tabs>
            {!switchTab?
                <UrlField 
                    setTempURL={setTempURL}
                    setURL={props.setURL}
                    imgURLTemp={imgURLTemp}/>
                :
                <UploadImg onChange={onChange}/>
            }
        </Stack>
    )
}

export default ImageStack
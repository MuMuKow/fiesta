import React, {useState} from 'react'

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


import './AddEvent/AddEvent.css'
import UploadImg from './AddEvent/UploadImg'
import UrlField from './AddEvent/UrlField'

function AddEvent() {
    const [switchTab,setTab] = useState(true)


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
          setURL(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const NOIMAGEURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
    const [imgURL,setURL] = useState(NOIMAGEURL)
    const [imgURLTemp,setTempURL] = useState(NOIMAGEURL)
    
    return (
        <div className="all-stacks">
            <Stack 
            className="image-stack"
            alignItems="center">
                <h1>Party Poster!</h1>
                <div className="add-image">
                    <img alt="error" style={{width:"100%",height:"100%",objectFit:"contain"}} src={imgURL}/>
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
                        setURL={setURL}
                        imgURLTemp={imgURLTemp}/>
                    :
                    <UploadImg onChange={onChange}/>
                }
            </Stack>
            <Stack sx={{margin:"2rem"}}>
                <TextField
                    fullWidth
                    required
                    id="party-name"
                    label="Name"
                    margin="dense"
                    helperText="The party's name"
                />
                <TextField
                    fullWidth
                    required
                    id="location"
                    label="Address"
                    margin="normal"
                    helperText="The address where the party will take place"
                />
                <TextField
                    id="party-desc"
                    label="Description"
                    multiline
                    rows={6}
                    margin="normal"
                    helperText="Time, Date, Theme, Fee, etc."
                />
                <Button variant="contained" component="span" sx={{margin: "2vh",fontSize:"larger"}}>
                    Submit
                </Button>
            </Stack>
        </div>
    )
}

export default AddEvent
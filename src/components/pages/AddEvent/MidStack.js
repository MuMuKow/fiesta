import React, {useState} from 'react'
import Geocode from "react-geocode"

import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function MidStack(props){

    Geocode.setApiKey("AIzaSyDOQ7paZFBDSnK0stDffkN8VdYeFwnzq3U")
    
    const [addressHelper, setAddressHelper] = useState("The address where the party will take place")

    const addressOnChange = () => {
        Geocode.fromAddress(props.address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                props.setLocation({lat,lng})
                props.setAddy("Good Address")
                setAddressHelper("Current Address: \"" + props.address + "\"")
            },
            (error) => {
            props.setAddy("Error: Address Invalid")
        })
    }

    return(
        <Stack sx={{margin:"2rem",width:"90%"}}>
            <TextField
                fullWidth
                required
                id="party-name"
                label="Name"
                margin="normal"
                helperText="The party's name"
                onChange={event=>props.setNewParty(event.target.value)}
                inputProps={{ maxLength: 40 }}
            />
            <TextField
                fullWidth
                required
                id="location"
                label="Address"
                margin="normal"
                helperText={addressHelper}
                onChange={event=>props.setAddress(event.target.value)}
            />
            <Button 
                variant="outlined"
                sx={{margin:"2vh",color:"black"}}
                onClick={addressOnChange}
            >
                {props.goodAddy}
            </Button>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DateTimePicker
                    renderInput={(prop) => <TextField {...prop} margin="normal" helperText="Starting Time"/>}
                    value={props.time}
                    onChange={(newValue) => {
                        props.setTime(newValue);
                    }}
                />
            </LocalizationProvider>
        </Stack>
    )
}

export default MidStack
import React from 'react'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { db, getCurrentUser } from '../../../firebase'
import { collection , addDoc } from 'firebase/firestore'

function RightStack(props){

    const pinDataCollectionRef = collection(db, "pinData")

    const createEvent = async () => {
        if(props.goodAddy == "Good Address" &&
        props.imgURL && 
        props.location.lat && 
        props.location.lng && 
        props.newMore && 
        props.newParty){
            await addDoc(pinDataCollectionRef, {
                date: Math.ceil(props.time.getTime()/1000/60/60/24),
                img: props.imgURL,
                late: props.location.lat,
                long: props.location.lng,
                more: props.newMore,
                party: props.newParty,
                rated: [],
                rating: 0,
                user: props.hostName,
                address: props.address
            })
        }
    }

    return(
        <Stack sx={{margin:"2rem",width:"90%"}}>
            <TextField
                id="party-desc"
                label="Description"
                multiline
                rows={4}
                margin="normal"
                helperText="Theme, DJ, Fee, etc."
                onChange={event=>props.setNewMore(event.target.value)}
            />
            <TextField
                id="party-host"
                label="Host Name"
                margin="normal"
                helperText={"Optional: \"Anonymous\" by default"}
                onChange={event=>props.setHostName(event.target.value)}
            />
            <Button 
                variant="contained" 
                component="span" 
                sx={{margin: "2vh",fontSize:"larger"}}
                onClick={()=>createEvent()}
            >
                Submit
            </Button>
        </Stack>
    )
}

export default RightStack
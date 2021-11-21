import React from 'react'

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

import { db, getCurrentUser } from '../../../firebase'
import { collection, addDoc, Timestamp, GeoPoint } from 'firebase/firestore'

function RightStack(props){

    const pinDataCollectionRef = collection(db, "pinData")

    const createEvent = async () => {
        if(props.goodAddy == "Good Address" &&
        props.imgURL && 
        props.location.lat && 
        props.location.lng && 
        props.newMore && 
        props.newParty){
            const newPoint = new GeoPoint(props.location.lat,props.location.lng)
            await addDoc(pinDataCollectionRef, {
                date: Timestamp.fromDate(props.time),
                img: props.imgURL,
                location: newPoint,
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
                helperText="Theme, DJ, Fee, etc.(max 225 characters)"
                onChange={event=>props.setNewMore(event.target.value)}
                inputProps={{ maxLength: 225 }}
            />
            <TextField
                id="party-host"
                label="Host Name"
                margin="normal"
                helperText={"Optional: \"Anonymous\" by default"}
                onChange={event=>props.setHostName(event.target.value)}
                inputProps={{ maxLength: 40 }}
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
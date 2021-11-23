import React, {useState} from 'react'
import { NavLink } from 'react-router-dom';

import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Backdrop } from '@mui/material';

import { db, useAuth } from '../../../firebase'
import { collection, addDoc, Timestamp, GeoPoint } from 'firebase/firestore'

function RightStack(props){

    const pinDataCollectionRef = collection(db, "pinData")

    const currentUser = useAuth()
    
    const [showError,setshowError] = useState(false)
    const [open, setOpen] = useState(false)

    function checkHost(name){
        if(name === ""){
            return "Anonymous"
        }
        else{
            return name
        }
    }

    const createEvent = async () => {
        if(!props.edit){
            if(props.checkValid() === ""){
                const newPoint = new GeoPoint(props.location.lat,props.location.lng)
                setOpen(true)
                await addDoc(pinDataCollectionRef, {
                    date: Timestamp.fromDate(props.time),
                    img: props.imgURL,
                    location: newPoint,
                    more: props.newMore,
                    party: props.newParty,
                    rateup: [],
                    ratedown: [],
                    rating: 0,
                    user: checkHost(props.hostName),
                    address: props.address,
                    userid: currentUser.uid
                })
            } else{
                setshowError(true)
            }
        } else{
            if(currentUser?.uid === props.uid){
                const newPoint = new GeoPoint(props.location.lat,props.location.lng)
                const userDoc = doc(db, "pinData", props.id)
                updateDoc(userDoc, {
                    date: Timestamp.fromDate(props.time),
                    img: props.imgURL,
                    location: newPoint,
                    more: props.newMore,
                    party: props.newParty,
                    rateup: [],
                    ratedown: [],
                    rating: 0,
                    user: checkHost(props.hostName),
                    address: props.address,
                    userid: currentUser.uid
                })
            }
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
                defaultValue={props.newMore}
            />
            <TextField
                id="party-host"
                label="Host Name"
                margin="normal"
                helperText={"Optional: \"Anonymous\" by default"}
                onChange={event=>props.setHostName(event.target.value)}
                inputProps={{ maxLength: 40 }}
                defaultValue={props.hostName}
            />
            <Button 
                variant="contained" 
                component="span" 
                sx={{margin: "2vh",fontSize:"larger"}}
                onClick={()=>createEvent()}
            >
                Submit
            </Button>
            {showError?<p style={{color:"red"}}>{props.checkValid()}</p>:""}
            <NavLink exact to="/">
                <Backdrop
                    sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                    open={open}
                >
                    <h1 style={{color:"lightGreen"}}>Success! Click to be redirected to Home page.</h1>
                </Backdrop>
            </NavLink>
        </Stack>
    )
}

export default RightStack
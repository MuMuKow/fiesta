import React, {useState} from 'react'

import './EditEvent.css'
import MidStack from '../AddEvent/MidStack'
import RightStack from '../AddEvent/RightStack';
import ImageStack from '../AddEvent/ImageStack';

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

import { useAuth } from '../../../firebase';

function EditEvent(props) {
    const currentUser = useAuth()

    const [newParty,setNewParty] = useState(props.party)
    const [hostName,setHostName] = useState(props.user)
    const [newMore,setNewMore] = useState(props.more)
    const [time, setTime] = useState(new Date(props.date));
    console.log(time)
    const [imgURL,setURL] = useState(props.img)
    const [address,setAddress] = useState(props.address)
    const [location,setLocation] = useState({lat:props.lat,lng:props.lng})

    const [goodAddy,setAddy] = useState("Check if Address is Valid")
    
    const checkImage = (src) => { //copied from "https://stackoverflow.com/questions/5678899/change-image-source-if-file-exists"
        var img = new Image();
        img.onerror = function() {
            setURL("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png")
        };
        img.src = src;
    }

    const checkValid = () => {
        checkImage(imgURL)
        if(!(currentUser?.uid)){
            return "Please login"
        } else if(!newParty){
            return "Please enter party name"
        } else if(goodAddy !== "Good Address"){
            return "Please enter and check valid address"
        } else if(!newMore){
            return "Please enter party description"
        } else if(!time.getTime()){
            return "Please enter valid time"
        } else{
            return ""
        }
    }

    return (
        <div>
            {props.openEdit ? 
                <div className="cover">
                    <div className="all-stacks">
                        <ImageStack
                            setURL={setURL}
                            imgURL={imgURL}
                        />
                        <MidStack
                            address={address}
                            setLocation={setLocation}
                            setAddy={setAddy}
                            newParty={newParty}
                            setNewParty={setNewParty}
                            setAddress={setAddress}
                            time={time}
                            setTime={setTime}
                            goodAddy={goodAddy}
                        />
                        <RightStack
                            imgURL={imgURL}
                            location={location}
                            newMore={newMore}
                            newParty={newParty}
                            time={time}
                            hostName={hostName}
                            address={address}
                            userid={props.userid}

                            setNewMore={setNewMore}
                            setHostName={setHostName}
                            setURL={setURL}

                            goodAddy={goodAddy}
                            checkValid={checkValid}

                            edit={true}
                            id={props.id}
                        />
                        <IconButton className="close-btn" onClick={() => props.setOpenEdit(false)}>
                            <CloseIcon sx={{color:"black",fontSize: 40}}/>
                        </IconButton>
                    </div>
                </div>:""
            }
        </div>
    )
}

export default EditEvent
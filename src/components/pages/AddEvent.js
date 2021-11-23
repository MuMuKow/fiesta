import React, {useState} from 'react'

import './AddEvent/AddEvent.css'
import MidStack from './AddEvent/MidStack'
import RightStack from './AddEvent/RightStack';
import ImageStack from './AddEvent/ImageStack';
import { useAuth } from '../../firebase';

function AddEvent() {
    const currentUser = useAuth()
    
    const [newParty,setNewParty] = useState("")
    const [hostName,setHostName] = useState("Anonymous")
    const [newMore,setNewMore] = useState("")
    const [time, setTime] = useState(new Date());
    const [imgURL,setURL] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png")
    const [address,setAddress] = useState("")
    const [location,setLocation] = useState({lat:0,lng:0})

    const [goodSubmit, setSubmit] = useState(true)
    const [goodAddy,setAddy] = useState("Check if Address is Valid")

    const [errorNow, setErrorNow] = useState("")
    
    const checkImage = (src) => { //copied from "https://stackoverflow.com/questions/5678899/change-image-source-if-file-exists"
        var img = new Image();
        img.onerror = function() {
            setURL("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png")
        };
        img.src = src;
    }

    const checkValid = () => {
        if(!(currentUser?.uid)){
            return "Please login"
        } else if(goodAddy !== "Good Address"){
            return "Please enter and check valid address"
        } else if(!newMore){
            return "Please enter party description"
        } else if(!newParty){
            return "Please enter party name"
        } else if(!time.getTime()){
            return "Please enter valid time"
        } else{
            return ""
        }
    }

    const updateSubmit = () => {
        checkImage(imgURL)
        if(checkValid() === ""){
            setErrorNow(checkValid())
            setSubmit(false)
        } else{
            setErrorNow(checkValid())
            setSubmit(true)
        }
    }

    return (
        <div>
            {currentUser ? 
            <div className="all-stacks">
                <ImageStack
                    updateSubmit={updateSubmit}
                    setURL={setURL}
                    imgURL={imgURL}
                />
                <MidStack 
                    updateSubmit={updateSubmit}
                    address={address}
                    setLocation={setLocation}
                    setAddy={setAddy}
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

                    setNewMore={setNewMore}
                    setHostName={setHostName}
                    setURL={setURL}

                    goodAddy={goodAddy}
                    goodSubmit={goodSubmit}
                    errorNow={errorNow}

                    checkValid={checkValid}
                    updateSubmit={updateSubmit}
                />
            </div>:
            <h1 className="all-stacks">
                Please login to add new event!
            </h1>}
        </div>
    )
}

export default AddEvent
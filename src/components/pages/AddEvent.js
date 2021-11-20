import React, {useState} from 'react'

import './AddEvent/AddEvent.css'
import MidStack from './AddEvent/MidStack'
import RightStack from './AddEvent/RightStack';
import ImageStack from './AddEvent/ImageStack';

function AddEvent() {

    const [goodAddy,setAddy] = useState("Check if Address is Valid")
    
    const [newParty,setNewParty] = useState("")
    const [hostName,setHostName] = useState("Anonymous")
    const [newMore,setNewMore] = useState("")
    const [time, setTime] = useState(new Date);

    const [imgURL,setURL] = useState("https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png")
    
    const [address,setAddress] = useState("")
    const [location,setLocation] = useState({lat:0,lng:0})

    return (
        <div className="all-stacks">
            <ImageStack
                setURL={setURL}
                imgURL={imgURL}
            />
            <MidStack 
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
                setNewMore={setNewMore}
                setHostName={setHostName}
                goodAddy={goodAddy}
                imgURL={imgURL}
                location={location}
                newMore={newMore}
                newParty={newParty}
                time={time}
                hostName={hostName}
                address={address}
            />
        </div>
    )
}

export default AddEvent
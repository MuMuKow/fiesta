import React, {useState,useEffect} from "react"
import "./Event.css"
import Button from '@mui/material/Button';
import dayFormat from "../../../dayFormat.js";

import { db } from '../../../firebase'
import { collection , getDocs } from 'firebase/firestore'

function Event(props) {

    const [pinData, setPinData] = useState([])
    const pinDataCollectionRef = collection(db, "pinData")


    useEffect(() =>{
        
        const getPinData = async () => {
            const data = await getDocs(pinDataCollectionRef)
            setPinData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getPinData()
    }, [])

    const chosen = pinData[props.chosenEvent]

    return (props.eventButton) ? (
        <div className="pop-card">
            <img alt={props.chosenEvent} 
                src={chosen.img} 
                className="pop-card-img"
            />
            <div className="pop-card-inner">
                <h2 className="pop-card-title">{chosen.party}</h2>
                <p className="pop-card-date">{dayFormat(chosen.date.toDate())}</p>
                <p className="pop-card-address">{chosen.address}</p>
                <p className="pop-card-desc">{chosen.more}</p>
                <h3 className="pop-card-rating">{chosen.rating}</h3>
                <h4 className="pop-card-user">{chosen.user}</h4>
                <Button className="close-btn" variant="contained" onClick={() => props.setEventButton(false)}>
                    Close
                </Button>
            </div>
        </div>
    ) : "";
}

export default Event



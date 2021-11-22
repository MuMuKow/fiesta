import React from "react"
import "./Event.css"

import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";

import dayFormat from "../../../dayFormat.js";

import usePinData from "../usePinData";

function Event(props) {

    const pinData = usePinData()

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
                <Button >
                    X
                </Button>
                <IconButton className="close-btn" onClick={() => props.setEventButton(false)}>
                    <CloseIcon sx={{color:"black",fontSize: 40}}/>
                </IconButton>
            </div>
        </div>
    ) : "";
}

export default Event



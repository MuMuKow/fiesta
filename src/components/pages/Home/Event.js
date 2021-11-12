import React from "react"
import "./SideBar.js"
import "./Event.css"
import Button from '@mui/material/Button';

function Event(props) {
    const chosen = props.item[props.chosenEvent]
    return (props.eventButton) ? (
        <div className="pop-card">
            <img alt={chosen.alt} 
                src={chosen.img} 
                className="pop-card-img"
            />
            <div className="pop-card-inner">
                <h2 className="pop-card-title">{chosen.party}</h2>
                <p className="pop-card-description">
                    {chosen.more}
                </p>
                <h3 className="pop-card-rating">{chosen.rating}</h3>
                <h4 className="pop-card-user">{chosen.user}</h4>
                <Button className="close-btn" variant="contained" onClick={() => props.setEventButton(false)}>
                    Close
                </Button>
                {chosen.children}
            </div>
        </div>
    ) : "";
}

export default Event



import React from "react"
import "./SideBar.js"
import "./Event.css"

function Event(props) {
    return (props.eventButton) ? (
        <div className="event-card">
            <div className="event-card-inner">
                <h1>HELLO</h1>
                <button className="close-btn">
                    Close
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Event



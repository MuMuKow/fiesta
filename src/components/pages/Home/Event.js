import React from "react"
import "./SideBar.js"
import "./Event.css"

function Event(props) {
    return (props.eventButton) ? (
        <div className="pop-card">
            <div className="pop-card-inner">
                <h1>HELLO</h1>
                <button className="close-btn" onClick={() => props.setEventButton(false)}>
                    Close
                </button>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Event



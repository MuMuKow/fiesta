import React from 'react'
import './SideBar.css'
import PinImage from './map-pin.svg'

function Pin(props) {
    const hover = (props.eventNum === props.alt)
    return (
        <div onMouseOver={() => props.setEventNum(props.alt)}
            onMouseLeave={() => props.setEventNum(-1)}>
            <img alt={props.alt} 
                lat={props.late} 
                lng={props.long}
                width={30}
                className={(hover)?"imagActive":"imag"}
                src={PinImage}
            />
            <div className={(hover)?"popupActive":"popup"}>
                <div className="pop-body">
                    <p className="pop-title">{props.party}</p>
                    <p className="pop-date">
                        {props.date}
                    </p>
                    <h3 className="pop-address">{props.address}</h3>
                    <h3 className="pop-rating">{props.rating}</h3>
                </div>
            </div>
        </div>
    )
}

export default Pin
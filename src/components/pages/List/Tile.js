import React from 'react'
import './Tile.css'

function Tile(props) {
    return (
        <div className="one-tile">
            <img alt={props.alt} 
                src={props.img} 
                className="tile-img"
            />
            <div className="tile-body">
                <h1 className="tile-title">{props.party}</h1>
                <p className="tile-description">
                    {props.more}
                </p>
                <h2 className="tile-rating">{props.rating}</h2>
                <h3 className="tile-user">{props.user}</h3>
            </div>
        </div>
    )
}

export default Tile
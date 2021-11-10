import React from 'react'

function Tile(props) {
    return (
        <div>
            <img alt={props.alt} 
                src={props.img} 
                className="tile-img"
            />
            <div className="tile-body">
                <h2 className="tile-title">{props.party}</h2>
                <p className="tile-description">
                    {props.more}
                </p>
                <h3 className="tile-rating">{props.rating}</h3>
            </div>
        </div>
    )
}

export default Tile
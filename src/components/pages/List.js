import React from 'react'
import Tile from "./List/Tile"
import './List/Tile.css'
import dayFormat from "../../dayFormat"

import usePinData from './usePinData'

function List() {
    
    const pinData = usePinData()

    const tileList = pinData.map((tile,index) => <Tile
        alt={index}
        key={index}

        party={tile.party}
        img={tile.img}
        rating={tile.rating}
        more={tile.more}
        user={tile.user}
        rated={tile.rated}
        address={tile.address}
        date={dayFormat(tile.date.toDate())}
    />)
    return (
        <div className="tile-list">
            {tileList}
        </div>
    )
}

export default List
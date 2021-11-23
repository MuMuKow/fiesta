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

        id={tile.id}
        party={tile.party}
        img={tile.img}
        rating={tile.rating}
        more={tile.more}
        user={tile.user}
        rateup={tile.rateup}
        ratedown={tile.ratedown}
        address={tile.address}
        userid={tile.userid}
        date={dayFormat(tile.date.toDate())}
    />)
    return (
        <div className="tile-list">
            {tileList}
        </div>
    )
}

export default List
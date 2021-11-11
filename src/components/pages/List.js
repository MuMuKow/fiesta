import React from 'react'
import Tile from "./List/Tile"
import pinData from '../../pinData'
import './List/Tile.css'

function List() {
        const tileList = pinData.map(tile => <Tile
            alt={tile.id}
            key={tile.id}
            party={tile.party}
            img={tile.img}
            rating={tile.rating}
            more={tile.more}
            user={tile.user}
        />)
        return (
            <div className="tile-list">
                {tileList}
            </div>
        )
    }

export default List
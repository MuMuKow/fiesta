import React, { useState, useEffect } from 'react'
import Tile from "./List/Tile"
import './List/Tile.css'
import dayFormat from "../../dayFormat"

import { db } from '../../firebase'
import { collection , getDocs, Timestamp, GeoPoint } from 'firebase/firestore'

function List() {
    const [pinData, setPinData] = useState([])
    const pinDataCollectionRef = collection(db, "pinData")

    useEffect(() =>{
        
        const getPinData = async () => {
            const data = await getDocs(pinDataCollectionRef)
            setPinData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getPinData()
    }, [])

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
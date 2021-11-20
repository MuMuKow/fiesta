import React, { useState, useEffect } from 'react'

import SimpleMap from './Home/SimpleMap'
import SideBar from './Home/SideBar'
import Event from './Home/Event'

import { db } from '../../firebase'
import { collection , getDocs } from 'firebase/firestore'

function Home() {
    const [eventNum,setEventNum] = useState(-1)
    const [chosenEvent,setChosenEvent] = useState(-1)
    const [eventButton,setEventButton] = useState(false)

    const [pinData, setPinData] = useState([])
    const pinDataCollectionRef = collection(db, "pinData")

    useEffect(() =>{
        
        const getPinData = async () => {
            const data = await getDocs(pinDataCollectionRef)
            setPinData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getPinData()
    }, [])

    return (
        <div>
            <Event 
                setChosenEvent={setChosenEvent} 
                chosenEvent ={chosenEvent}
                eventButton={eventButton}
                setEventButton={setEventButton}
                item={pinData}
            />
            <SimpleMap setEventNum={setEventNum} eventNum={eventNum} item={pinData}/>
            <SideBar 
                setEventNum={setEventNum} 
                eventNum={eventNum} 
                item={pinData}
                setChosenEvent={setChosenEvent} 
                chosenEvent ={chosenEvent}
                eventButton={eventButton}
                setEventButton={setEventButton}
            />
        </div>
    )
}

export default Home
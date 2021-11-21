import React, { useState, useEffect } from 'react'

import SimpleMap from './Home/SimpleMap'
import SideBar from './Home/SideBar'
import Event from './Home/Event'

function Home() {
    const [eventNum,setEventNum] = useState(-1)
    const [chosenEvent,setChosenEvent] = useState(-1)
    const [eventButton,setEventButton] = useState(false)

    return (
        <div>
            <Event 
                setChosenEvent={setChosenEvent} 
                chosenEvent ={chosenEvent}
                eventButton={eventButton}
                setEventButton={setEventButton}
            />
            <SimpleMap 
                setEventNum={setEventNum}
                eventNum={eventNum}
            />
            <SideBar 
                setEventNum={setEventNum} 
                eventNum={eventNum}
                setChosenEvent={setChosenEvent} 
                chosenEvent ={chosenEvent}
                eventButton={eventButton}
                setEventButton={setEventButton}
            />
        </div>
    )
}

export default Home
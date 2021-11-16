import React, {useState} from 'react'

import SimpleMap from './Home/SimpleMap'
import SideBar from './Home/SideBar'
import Event from './Home/Event'

import pinData from '../../pinData'

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
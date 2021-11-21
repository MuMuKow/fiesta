import React, {useState, useEffect} from 'react'

import './SideBar.css'
import EventCard from './EventCard'
import dayFormat from '../../../dayFormat'

import { db } from '../../../firebase'
import { collection , getDocs } from 'firebase/firestore'

function SideBar(props) {

    const [pinData, setPinData] = useState([])
    const pinDataCollectionRef = collection(db, "pinData")

    useEffect(() =>{
        
        const getPinData = async () => {
            const data = await getDocs(pinDataCollectionRef)
            setPinData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getPinData()
    }, [])

    const cardList = pinData.map((card,index) => <EventCard
        alt={index}
        key={index}

        party={card.party}
        img={card.img}
        rating={card.rating}
        date={dayFormat(card.date.toDate())}
        user={card.user}

        eventNum={props.eventNum}
        setEventNum={props.setEventNum}
        setChosenEvent={props.setChosenEvent} 
        chosenEvent ={props.chosenEvent}
        eventButton={props.eventButton}
        setEventButton={props.setEventButton}
    />)
    return (
        <div className="event-card-list">
            {cardList}
        </div>
    )
}

export default SideBar
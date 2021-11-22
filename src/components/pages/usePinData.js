import { useState, useEffect } from 'react'
import { db } from '../../firebase'
import { collection , getDocs } from 'firebase/firestore'

export default function usePinData(){

    const [pinData, setPinData] = useState([])

    useEffect(() =>{
        const pinDataCollectionRef = collection(db, "pinData")
        const getPinData = async () => {
            const data = await getDocs(pinDataCollectionRef)
            setPinData(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getPinData()
    }, [])

    return pinData
}
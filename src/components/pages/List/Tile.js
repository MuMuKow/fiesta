import React, {useEffect, useState} from 'react'

import { updateDoc, doc } from '@firebase/firestore';
import { db, useAuth } from '../../../firebase';

import './Tile.css'

import Stack from '@mui/material/Stack';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

function Tile(props) {

    const currentUser = useAuth()

    const [upVote,setUpVote] = useState(false)
    const [downVote,setDownVote] = useState(false)
    const [newRating,updateRating] = useState(props.rating)

    const removeElement = (array, item) => {
        let index = array.indexOf(item);
        while(index !== -1){
            array.splice(index, 1)
            index = array.indexOf(item);
        }
        return array
    }

    const updateVote = (offset) => {
        if(currentUser){
            const userDoc = doc(db, "pinData", props.id)
            if(offset == 1 && !upVote){
                const upArray = props.rateup
                upArray.push(currentUser.uid)
                setUpVote(true)
                updateRating(props.rating+1)
                if(!downVote){
                    updateDoc(userDoc, {rating: props.rating + 1, rateup: upArray})
                }
                else{
                    setDownVote(false)
                    updateDoc(userDoc, {rating: props.rating + 2, rateup: upArray, ratedown: removeElement(props.ratedown,currentUser.uid)})
                }
            }
            else if(offset == -1 && !downVote){
                const downArray = props.ratedown
                downArray.push(currentUser.uid)
                setDownVote(false)
                updateRating(props.rating-1)
                if(!upVote){
                    updateDoc(userDoc, {rating: props.rating - 1, ratedown: downArray})
                }
                else{
                    setUpVote(false)
                    updateDoc(userDoc, {rating: props.rating - 2, ratedown: downArray, rateup: removeElement(props.rateup,currentUser.uid)})
                }
            }
            else{
                if(offset == 1){
                    updateRating(props.rating-1)
                    setUpVote(false)
                    updateDoc(userDoc, {rating: props.rating - 1, rateup: removeElement(props.rateup,currentUser.uid)})
                }
                else if(offset == -1){
                    updateRating(props.rating+1)
                    setDownVote(false)
                    updateDoc(userDoc, {rating: props.rating + 1, ratedown: removeElement(props.ratedown,currentUser.uid)})
                }
            }
        }
        else{
            alert("Login to vote!")
        }
    }

    useEffect( () => {
        setUpVote(currentUser ? props.rateup.includes(currentUser.uid) : false)
        setDownVote(currentUser ? props.ratedown.includes(currentUser.uid) : false)
    })

    return (
        <div className="one-tile">
            <img alt={props.alt} 
                src={props.img} 
                className="tile-img"
            />
            <div className="tile-body">
                <h1 className="tile-title">{props.party}</h1>
                <p className="tile-date">{props.date}</p>
                <p className="tile-address">{props.address}</p>
                <p className="tile-desc">
                    {props.more}
                </p>
                <h3 className="tile-user">{props.user}</h3>
            </div>
            <Stack sx={{justifyContent:"center",alignItems:"center",width:"10%"}} spacing={2}>
                {currentUser ? <IconButton onClick={() => {updateVote(1)}}>
                    {!upVote?
                    <UpIcon sx={{color:"green", fontSize: 40, borderRadius:"50px"}}/>:
                    <UpIcon sx={{color:"green", fontSize: 40, backgroundColor:"lightGray", borderRadius:"50px"}}/>
                    }
                </IconButton>:""}
                <h2 className="tile-rating">{newRating}</h2>
                {currentUser ? <IconButton onClick={() => {updateVote(-1)}}>
                    {!downVote?
                    <DownIcon sx={{color:"red", fontSize: 40, borderRadius:"50px"}}/>:
                    <DownIcon sx={{color:"red", fontSize: 40, backgroundColor:"lightGray", borderRadius:"50px"}}/>
                    }
                </IconButton>:""}
            </Stack>
        </div>
    )
}

export default Tile
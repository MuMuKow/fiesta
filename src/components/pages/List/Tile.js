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

    const [upVote,setUpVote] = useState(currentUser ? props.rateup.includes(currentUser.uid) : false)
    const [downVote,setDownVote] = useState(currentUser ? props.ratedown.includes(currentUser.uid) : false)

    const removeElement = (array, item) => {
        let index = array.indexOf(item);
        if (index !== -1) {
            array.splice(index, 1);
        }
        return array
    }

    const updateVote = async (offset) => {
        const userDoc = doc(db, "pinData", props.id)
        if(offset == 1 && !upVote){
            const upArray = props.rateup
            upArray.push(currentUser.uid)
            if(!downVote){
                await updateDoc(userDoc, {rating: props.rating + 1, rateup: upArray})
            }
            else{
                await updateDoc(userDoc, {rating: props.rating + 2, rateup: upArray, ratedown: removeElement(props.ratedown,currentUser.uid)})
            }
        }
        else if(offset == -1 && !downVote){
            const downArray = props.ratedown
            downArray.push(currentUser.uid)
            if(!upVote){
                await updateDoc(userDoc, {rating: props.rating - 1, ratedown: downArray})
            }
            else{
                await updateDoc(userDoc, {rating: props.rating - 2, ratedown: downArray, rateup: removeElement(props.rateup,currentUser.uid)})
            }
        }
        else{
            if(offset == 1){
                await updateDoc(userDoc, {rating: props.rating - 1, rateup: removeElement(props.rateup,currentUser.uid)})
            }
            else if(offset == -1){
                await updateDoc(userDoc, {rating: props.rating + 1, ratedown: removeElement(props.ratedown,currentUser.uid)})
            }
        }
    }

    useEffect( () => {}, [upVote,downVote])

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
                <IconButton onClick={() => {updateVote(1)}}>
                    {!upVote?
                    <UpIcon sx={{color:"green", fontSize: 40, borderRadius:"50px"}}/>:
                    <UpIcon sx={{color:"green", fontSize: 40, backgroundColor:"lightGray", borderRadius:"50px"}}/>
                    }
                </IconButton>
                <h2 className="tile-rating">{props.rating}</h2>
                <IconButton onClick={() => {updateVote(-1)}}>
                    {!downVote?
                    <DownIcon sx={{color:"red", fontSize: 40, borderRadius:"50px"}}/>:
                    <DownIcon sx={{color:"red", fontSize: 40, backgroundColor:"lightGray", borderRadius:"50px"}}/>
                    }
                </IconButton>
            </Stack>
        </div>
    )
}

export default Tile
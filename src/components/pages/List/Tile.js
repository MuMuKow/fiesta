import React, {useState, useEffect} from 'react'

import { updateDoc, doc } from '@firebase/firestore';
import { db, useAuth } from '../../../firebase';

import './Tile.css'
import EditEvent from './EditEvent'
import DeleteEvent from './DeleteEvent';

import Stack from '@mui/material/Stack';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

function Tile(props) {

    const currentUser = useAuth()

    const [upVote,setUpVote] = useState(false)
    const [downVote,setDownVote] = useState(false)
    const [newRating,updateRating] = useState(props.rating)
    const [owner,setOwner] = useState(true)

    const [openEdit, setOpenEdit] = useState(false)
    const [openDelete,setOpenDelete] = useState(false)

    const removeElement = (array, item) => {
        let index = array.indexOf(item);
        while(index !== -1){
            array.splice(index, 1)
            index = array.indexOf(item);
        }
        return array
    }
    
    useEffect( () => {
        setUpVote(currentUser ? props.rateup.includes(currentUser.uid) : false)
        setDownVote(currentUser ? props.ratedown.includes(currentUser.uid) : false)
        setOwner(currentUser?.uid === props.userid)
    },[currentUser, props.rateup, props.ratedown, props.userid])

    const updateVote = (offset) => {
        if(currentUser){
            const userDoc = doc(db, "pinData", props.id)
            if(offset === 1 && !upVote){
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
            else if(offset === -1 && !downVote){
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
                if(offset === 1){
                    updateRating(props.rating)
                    setUpVote(false)
                    updateDoc(userDoc, {rating: props.rating - 1, rateup: removeElement(props.rateup,currentUser.uid)})
                }
                else if(offset === -1){
                    updateRating(props.rating)
                    setDownVote(false)
                    updateDoc(userDoc, {rating: props.rating + 1, ratedown: removeElement(props.ratedown,currentUser.uid)})
                }
            }
        }
        else{
            alert("Login to vote!")
        }
    }

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
                {owner ? 
                    <IconButton onClick={() => setOpenEdit(true)}>
                        <EditIcon sx={{color:"gray", fontSize: 40, borderRadius:"50px"}}/>
                    </IconButton>
                :
                    (currentUser ? 
                        <IconButton onClick={() => {updateVote(1)}}>
                            {!upVote?
                                <UpIcon sx={{color:"green", fontSize: 40, borderRadius:"50px"}}/>:
                                <UpIcon sx={{color:"green", fontSize: 40, backgroundColor:"lightGray", borderRadius:"50px"}}/>
                            }
                        </IconButton>:""
                    )
                }
                <h2 className="tile-rating">{newRating}</h2>
                {owner ? 
                    <IconButton onClick={() => setOpenDelete(true)}>
                        <DeleteForeverIcon sx={{color:"black", fontSize: 40, borderRadius:"50px"}}/>
                    </IconButton>
                :
                    (currentUser ? 
                        <IconButton onClick={() => {updateVote(-1)}}>
                            {!downVote?
                                <DownIcon sx={{color:"red", fontSize: 40, borderRadius:"50px"}}/>:
                                <DownIcon sx={{color:"red", fontSize: 40, backgroundColor:"lightGray", borderRadius:"50px"}}/>
                            }
                        </IconButton>:""
                    )
                }
                <EditEvent 
                    openEdit={openEdit} 
                    setOpenEdit={setOpenEdit}
    
                    party={props.party}
                    img={props.img}
                    more={props.more}
                    date={props.date}
                    user={props.user}
                    address={props.address}
                    userid={props.userid}

                    rateup={props.rateup}
                    ratedown={props.ratedown}

                    rating={props.rating}
                    id={props.id}
                />
            </Stack>
            <DeleteEvent
                party={props.party}
                openDelete={openDelete}
                setOpenDelete={setOpenDelete}
                id={props.id}
                userid={props.userid}
                currentid={currentUser?.uid}
            />
        </div>
    )
}

export default Tile
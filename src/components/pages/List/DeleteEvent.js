import React, {useState} from "react"
import "./DeleteEvent.css"

import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from "@mui/material";
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';
import { Backdrop } from "@mui/material";

import { db } from "../../../firebase";
import { doc, deleteDoc } from "@firebase/firestore";

import { NavLink } from "react-router-dom";

function DeleteEvent(props) {

    const [open,setOpen] = useState(false)

    const deleteCard = () => {
        if(props.userid === props.currentid){
            setOpen(true)
            deleteDoc(doc(db, "pinData", props.id)).then(() => {
                console.log("Delete success")
            }).catch((error)=>{
                console.log(error)
            })
        }
    }

    const DeleteButton = styled(Button)(({theme}) => ({
        backgroundColor: "red",
        '&:hover': {
            backgroundColor: "#bd0d0d",
        },
    }))

    return (props.openDelete) ? (
        <div className="delete">
            <div className="delete-inner">
                <h2>{"Are you sure you want to delete \"" + props.party + "\"?"}</h2>
                <DeleteButton 
                    variant="contained"
                    component="span" 
                    sx={{margin: "2vh",fontSize:"larger"}}
                    onClick={()=>deleteCard()}
                >
                    Confirm Delete
                </DeleteButton>
                <IconButton className="close-btn" onClick={() => props.setOpenDelete(false)}>
                    <CloseIcon sx={{color:"black",fontSize: 40}}/>
                </IconButton>
                <NavLink exact to="/">
                    <Backdrop
                        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
                        open={open}
                    >
                        <h1 style={{color:"lightGreen"}}>Success! Click to be redirected to Home page.</h1>
                    </Backdrop>
                </NavLink>
            </div>
        </div>
    ) : "";
}

export default DeleteEvent



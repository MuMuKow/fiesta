import React from 'react'

import './Tile.css'

import Stack from '@mui/material/Stack';
import UpIcon from '@mui/icons-material/KeyboardArrowUp';
import DownIcon from '@mui/icons-material/KeyboardArrowDown';
import IconButton from '@mui/material/IconButton';

function Tile(props) {
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
                    <IconButton>
                        <UpIcon sx={{color:"green",fontSize: 40}}/>
                    </IconButton>
                    <h2 className="tile-rating">{props.rating}</h2>
                    <IconButton>
                        <DownIcon sx={{color:"red",fontSize: 40}}/>
                    </IconButton>
            </Stack>
        </div>
    )
}

export default Tile
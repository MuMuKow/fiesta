import React, {useState} from 'react'
import Geocode from "react-geocode"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DateTimePicker from '@mui/lab/DateTimePicker';

import './AddEvent/AddEvent.css'
import UploadImg from './AddEvent/UploadImg'
import UrlField from './AddEvent/UrlField'

import { db, getCurrentUser } from '../../firebase'
import { collection , addDoc } from 'firebase/firestore'



function AddEvent() {
    Geocode.setApiKey("AIzaSyDOQ7paZFBDSnK0stDffkN8VdYeFwnzq3U")
    const pinDataCollectionRef = collection(db, "pinData")

    const [switchTab,setTab] = useState(true)
    const [goodAddy,setAddy] = useState("Check if Address is Valid")
    
    const [newParty,setNewParty] = useState("")
    const [hostName,setHostName] = useState("Anonymous")
    const [newMore,setNewMore] = useState("")
    const [time, setTime] = useState(new Date);
    

    const NOIMAGEURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png"
    const [imgURL,setURL] = useState(NOIMAGEURL)
    const [imgURLTemp,setTempURL] = useState(NOIMAGEURL)
    

    const [address,setAddress] = useState("")
    const [location,setLocation] = useState({lat:0,lng:0})

    
    const createEvent = async () => {
        if(goodAddy == "Good Address" && imgURL && location.lat && location.lng && newMore && newParty){
            await addDoc(pinDataCollectionRef, {
                date: Math.ceil(time.getTime()/1000/60/60/24),
                img: imgURL,
                late: location.lat,
                long: location.lng,
                more: newMore,
                party: newParty,
                rated: [],
                rating: 0,
                user: hostName,
                address: address
            })
        }
    }

    const onChange = (e) => {       //copied code from https://codesandbox.io/s/wonderful-pine-i7fs3?file=/src/Demo.tsx:439-784
        e.preventDefault();
        let files;
        if (e.dataTransfer) {
          files = e.dataTransfer.files;
        } else if (e.target) {
          files = e.target.files;
        }
        const reader = new FileReader();
        reader.onload = () => {
          setURL(reader.result);
        };
        reader.readAsDataURL(files[0]);
    };

    const addressOnChange = () => {
        Geocode.fromAddress(address).then(
            (response) => {
                const { lat, lng } = response.results[0].geometry.location;
                setLocation({lat,lng})
                setAddy("Good Address")
            },
            (error) => {
            setAddy("Error: Address Invalid")
        })
    }
    
    return (
        <div className="all-stacks">
            <Stack 
            className="image-stack"
            alignItems="center">
                <div className="add-image">
                    <img alt="error" style={{width:"100%",height:"100%",objectFit:"contain"}} src={imgURL}/>
                </div>
                <Tabs className="add-image-tab" 
                        variant="fullWidth">
                    <Tab
                        onClick={() => setTab(true)} 
                        label="Upload"/>
                    <Tab
                        onClick={() => setTab(false)} 
                        label="URL"/>
                </Tabs>
                {!switchTab?
                    <UrlField 
                        setTempURL={setTempURL}
                        setURL={setURL}
                        imgURLTemp={imgURLTemp}/>
                    :
                    <UploadImg onChange={onChange}/>
                }
            </Stack>
            <Stack sx={{margin:"2rem",width:"90%"}}>
                <TextField
                    fullWidth
                    required
                    id="party-name"
                    label="Name"
                    margin="normal"
                    helperText="The party's name"
                    onChange={event=>setNewParty(event.target.value)}
                />
                <TextField
                    fullWidth
                    required
                    id="location"
                    label="Address"
                    margin="normal"
                    helperText="The address where the party will take place"
                    onChange={event=>setAddress(event.target.value)}
                />
                <Button 
                    variant="outlined"
                    sx={{margin:"2vh",color:"black"}}
                    onClick={addressOnChange}
                    helperText={goodAddy}
                >
                    {goodAddy}
                </Button>
                <LocalizationProvider dateAdapter={AdapterDateFns}>
                    <DateTimePicker
                        renderInput={(props) => <TextField {...props} 
                        margin="normal" helperText="Starting Time"/>}
                        value={time}
                        onChange={(newValue) => {
                        setTime(newValue);
                        }}
                    />
                </LocalizationProvider>
            </Stack>
            <Stack sx={{margin:"2rem",width:"90%"}}>
                <TextField
                    id="party-desc"
                    label="Description"
                    multiline
                    rows={4}
                    margin="normal"
                    helperText="Theme, DJ, Fee, etc."
                    onChange={event=>setNewMore(event.target.value)}
                />
                <TextField
                    id="party-host"
                    label="Host Name"
                    margin="normal"
                    helperText={"Optional: \"Anonymous\" by default"}
                    onChange={event=>setHostName(event.target.value)}
                />
                <Button 
                    variant="contained" 
                    component="span" 
                    sx={{margin: "2vh",fontSize:"larger"}}
                    onClick={()=>createEvent()}
                >
                    Submit
                </Button>
            </Stack>
        </div>
    )
}

export default AddEvent
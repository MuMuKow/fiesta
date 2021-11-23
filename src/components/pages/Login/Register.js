import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'

// for the backend + to add the 
import {signup} from '../../../firebase';
import { useRef, useState } from "react";
import { getAuth } from "firebase/auth";


let emailRef;
let passwordRef;
let passConRef;
 
function Register() {
    
    const [user,setUser] = useState()
    const [goodFill, setGoodFill] = useState(false)

    emailRef = useRef();
    passwordRef = useRef();
    passConRef = useRef();

    async function handleSignup() {
        try {
            if(passConRef.current.value === passwordRef.current.value){
                setUser(await signup(emailRef.current.value,passwordRef.current.value))
                console.log(user)
            }
            else{
                alert("Password does not match")
            }
        }
        catch (error) {
            alert(error);
        }
    }

    return (
        <div >
            <Stack>
                <div>
                    <form>
                    <TextField
                        inputRef={emailRef}
                        fullWidth
                        required
                        id="reg-email"
                        label="Email"
                        variant="filled"
                        margin="dense"
                        helperText="Please enter your email address"
                    />
                    <TextField
                        inputRef={passwordRef}
                        fullWidth
                        required
                        id="reg-pass"
                        label="Password"
                        variant="filled"
                        type="password"
                        margin="normal"
                    />
                    <TextField
                        inputRef={passConRef}
                        fullWidth
                        required
                        id="reg-pass-again"
                        label="Confirm Password"
                        variant="filled"
                        type="password"
                        margin="normal"
                    />
                    <Button onClick={handleSignup} variant="contained" sx={{margin: "2vh"}}>Register</Button>
                    </form>
                </div>
            </Stack>
      
        </div>
    )
}
export const auth = getAuth()
export default Register
import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'

// for the backend + to add the 
import {signup} from './firebase';
import { useRef } from "react";
import { getAuth } from "firebase/auth";


let emailRef;
let passwordRef;


// add user
async function handleSignup() {
    try {
     await signup(emailRef.current.value,passwordRef.current.value);
    } catch {
     alert("Error!");
    }
 }
 
function Register() {

    emailRef = useRef();
    passwordRef = useRef();
    return (
        <div >
            <Stack>
                <div>
                    <form>
                    <TextField
                        fullWidth
                        required
                        id="reg-name"
                        label="Username"
                        variant="filled"
                        margin="dense"
                        helperText="Please enter your username"
                    />
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
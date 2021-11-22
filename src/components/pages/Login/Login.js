import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'
import { useRef, useState } from "react";

import {useAuth, login, logout} from '../../../firebase';

let emailRef;
let passwordRef;


function Login() {
    
    const [user,setUser] = useState()
    const currentUser = useAuth();

    emailRef = useRef();
    passwordRef = useRef();

    async function handleLogin() {
        try {
            setUser(await login(emailRef.current.value,passwordRef.current.value))
            console.log(user)
        } catch (error){
            alert(error);
        }
    }

    async function handleLogout() {
        try {
            await logout();
        } catch (error) {
            alert(error);
        }
    }

    return (
        <div >
            <Stack>
                <div>
                    {currentUser?
                        <div>Currently logged in as: { currentUser?.email }
                            <Button onClick={handleLogout} variant="contained" sx={{margin: "2vh"}}>Logout</Button>
                        </div>
                    :
                        <form>
                            <TextField
                                inputRef={emailRef}
                                fullWidth
                                required
                                id="log-email"
                                label="Email"
                                variant="filled"
                                margin="dense"
                                helperText="Please enter your email address"
                            />
                            <TextField
                                inputRef={passwordRef}
                                fullWidth
                                required
                                id="log-pass"
                                label="Password"
                                variant="filled"
                                type="password"
                                margin="normal"
                            />
                            <Button onClick={handleLogin} variant="contained" sx={{margin: "2vh"}}>Login</Button>
                        </form>}
                </div>
            </Stack>
        </div>
    )
}

export default Login
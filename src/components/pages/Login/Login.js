import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'
import { useEffect, useState } from "react";
import { useAuth } from "./firebase";


import {signup, login, logout} from './firebase';

let emailRef;
let passwordRef;


// add user
async function handleLogin() {
     try {
        await login(emailRef.current.value,passwordRef.current.value);
     } catch {
      alert("Error!");
     }
  }

  async function handleLogout() {
    try {
      await logout();
    } catch {
      alert("Error!");
    }
  }

function Login() {
    const currentUser = useAuth();
    return (
        <div >
            <Stack>
                <div>
                <div>Currently logged in as: { currentUser?.email } </div>
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
                        <Button onClick={handleLogout} variant="contained" sx={{margin: "2vh"}}>Logout</Button>      
                    </form>
                </div>
            </Stack>
        </div>
    )
}

export default Login
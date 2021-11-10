import React from 'react'
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './Login.css'


import {signup} from './firebase';

// add user
async function handleSignup() {
     try {
      await signup("asddasssssss@gmail.com"," passasd");
     } catch {
      alert("Error!");
     }
  }


function Login() {
    return (
        <div >
            <Stack>
                <div>
                    <form>
                        <TextField
                            fullWidth
                            required
                            id="log-email"
                            label="Email"
                            variant="filled"
                            margin="dense"
                            helperText="Please enter your email address"
                        />
                        <TextField
                            fullWidth
                            required
                            id="log-pass"
                            label="Password"
                            variant="filled"
                            type="password"
                            margin="normal"
                        />
                        <Button onClick={handleSignup} variant="contained" sx={{margin: "2vh"}}>Login</Button>      
                    </form>
                </div>
            </Stack>
        </div>
    )
}

export default Login
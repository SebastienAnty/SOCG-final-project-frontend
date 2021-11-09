import React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import "./navbar.css"

export default function Navbar() {
    return (
    <>
        <div className="navbar">
            <h1>SOCG</h1>
            <Stack >
                <Avatar />
                User Name 
            </Stack>
        </div>
    </>
    )
}
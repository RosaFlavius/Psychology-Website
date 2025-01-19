import React from 'react';
import Grid from '@mui/material/Grid2';
import './navbar.styles.css'
import NavbarTabs from '../tabs/NavbarTabs';
import { Button } from '@mui/material';
import ConnectWithoutContactIcon from '@mui/icons-material/ConnectWithoutContact';
import Logo from '../../images/Logo.jpg'

function Navbar() {
    return ( 
        <div className="container-navbar">
            <Grid container spacing={2} className="container-content">
                <Grid size={{ lg: 2 }} className="grid-item title-container">
                <img src={Logo} alt="Logo" className="logo"/>
                </Grid>
                <Grid size={{ lg: 8 }} className="grid-item title-container">
                    <NavbarTabs/>
                </Grid>
                <Grid size={{ lg: 2 }} className="grid-item contact-button-container">
                    <Button className='contact-button' startIcon={<ConnectWithoutContactIcon />}>
                        <span className="contact-text">Contact</span>
                    </Button>
                </Grid>
            </Grid>
        </div>
     );
}

export default Navbar;
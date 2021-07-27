import { AppBar, Button, Toolbar, Grid } from '@material-ui/core';
import React from 'react';
import { useLocation } from "react-router-dom";

const Header = ({ country, onCountryChange}) => {
    
    let location = useLocation();

    const isDisabled = location.pathname.includes("/news/");
 
    const buttons = () => {
        return (
        <div>
            <Button variant="contained" color="primary" disabled={isDisabled} onClick={() => onCountryChange(country='gb')}>GB</Button>
            <Button variant="contained" color="primary" disabled={isDisabled} onClick={() => onCountryChange(country='us')}>US</Button>
        </div>
        ) 
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container spacing={2} justifyContent="space-between">
                    <Grid item >
                        <Button variant="contained" color="primary" href="/">
                            Top News
                        </Button>
                        <Button variant="contained" color="primary" href="/categories">
                            Categories
                        </Button>
                        <Button variant="contained" color="primary" href="/search">
                            Search
                        </Button>
                    </Grid>
                    <Grid item>
                        {buttons()}
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>   
    );
};

export default Header;
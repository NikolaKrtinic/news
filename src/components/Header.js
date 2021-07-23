import { AppBar, Button, Toolbar } from '@material-ui/core';
import React from 'react';

const Header = ({ clicked, disable, country, onCountryChange}) => {
    
 
    const buttons = () => {
        return (
        <div>
            <button disabled={!disable} onClick={() => onCountryChange(country='gb', !disable)}>GB</button>
            <button disabled={disable} onClick={() => onCountryChange(country='us', !disable)}>US</button>
        </div>
        ) 
    }
    return (
        <AppBar position="static">
            <Toolbar>
                <Button variant="contained" color="primary" href="/">
                    Top News
                </Button>
                <Button variant="contained" color="primary" href="/categories">
                    Categories
                </Button>
                <Button variant="contained" color="primary" href="/search">
                        Search
                </Button>
                <Button disabled={false}>{buttons()}</Button>
            </Toolbar>
        </AppBar>   
    );
};

export default Header;
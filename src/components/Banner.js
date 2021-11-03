import React, { useState } from 'react';
import "../styles/Banner.css";
import { Button } from '@mui/material';
import Search from './Search'
import { useHistory } from "react-router-dom";

function Banner() {

    const history = useHistory();

    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className="banner">

            <div className="banner__search">
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} varient="outlined" className="banner__searchButton">{showSearch ? "Hide" : "Search Dates"}</Button>
            </div>

            <div className="banner__info">
                <h1>Get out and streach your imagination</h1>
                <h5>Plan a different kind of gateway to uncover the hidden gems near you</h5>
                <Button onClick={() => history.push('/search')} varient="outlined">Explore Nearby</Button>
            </div>
            
        </div>
    )
}

export default Banner;
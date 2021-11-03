import React from 'react';
import '../styles/SearchResult.css';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarIcon from '@mui/icons-material/Star';

function SearchResult({img, location, title, description, star, price, total}) {
    return (
        <div className="searchResult">
            <img src={img} alt=""/>
            <FavoriteBorderIcon className="searchResult__heart"/>
            <div className="searchResult__info">
                <div className="searchResult__info__Top">
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>__________</p>
                    <p>{description}</p>
                </div>
                <div className="searchResult__info__Bottom">
                    <div className="searchResult__info__Bottom__Stars">
                        <StarIcon className="searchResult__info__Bottom_StarIcon" />
                        <p><strong>{star}</strong></p>
                    </div>
                    <div className="searchResult__info__Bottom__Price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchResult

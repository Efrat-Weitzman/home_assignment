import React from 'react';

const Film = (props) => {
    return (
        <>
            <div className="container">
                <h2>{props.chosenFilm.properties.title}</h2>
                <span><b>director:</b> {props.chosenFilm.properties.director}</span>
                <button 
                className="heart-button" 
                title="Add to favorites"
                onClick={() => props.handleFavoriteBtn(props.chosenFilm.properties.episode_id)}>
                    <svg
                        width='1em'
                        height='1em'
                        viewBox='0 0 16 16'
                        className='bi bi-heart-fill'
                        fill={(props.listFavorites.indexOf(props.chosenFilm.properties.episode_id) > -1) ? 'red' : 'black'}
                        xmlns='http://www.w3.org/2000/svg'
                    >
                        <path
                            fillRule='evenodd'
                            d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'
                        />
                    </svg>
                </button>
                <div><b>abstract:</b></div>
                <p>{props.chosenFilm.properties.opening_crawl}</p>
            </div>
        </>
    );
};
export default Film;
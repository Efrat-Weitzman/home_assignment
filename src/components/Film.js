import React from 'react';

const Film = (props) => {
    return (
        <>
            <div className="articles card">
                <div className="card-header d-flex align-items-center">
                    <h2 className="col-lg-11">{props.chosenFilm.properties.title}</h2>
                    <button
                        className="heart-button col-lg-1"
                        title={(props.listFavorites.indexOf(props.chosenFilm.properties.episode_id) > -1) ? 'Remove from favorites' : 'Add to favorites'}
                            onClick={() => props.handleFavoriteBtn(props.chosenFilm.properties.episode_id)}>
                        <svg
                            width='1.5em'
                            height='1.5em'
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
                </div>
                <div className="card-body no-padding">
                    <div className="text" ><b>director:</b> {props.chosenFilm.properties.director}</div>
                    <div className="text">
                        <div><b>abstract:</b></div>
                        <p>{props.chosenFilm.properties.opening_crawl}</p>
                    </div>
                </div>

            </div>
        </>
    );
};
export default Film;
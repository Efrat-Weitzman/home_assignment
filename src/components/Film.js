import React from 'react';

const Film = (props) => {
	return (
		<>
			<div className="container">
                <h2>{props.chosenFilm.properties.title}</h2>
                <span><b>director:</b> {props.chosenFilm.properties.director}</span>
                <div><b>abstract:</b></div>
                <p>{props.chosenFilm.properties.opening_crawl}</p>
            </div>     
		</>
	);
};
export default Film;
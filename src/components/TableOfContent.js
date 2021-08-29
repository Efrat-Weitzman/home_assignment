import React from 'react';

const TableOfContent = (props) => {
	return (
		<>
			{props.films.map((film, index) => (
				<div key={film.uid} className='image-container d-flex justify-content-start m-3'>
					<div onClick={() => props.handleChooseFilm(film)} >{film.properties.title} film item {index}</div>
				</div>
			))}       
		</>
	);
};
export default TableOfContent;
import React from 'react';

const TableOfContent = (props) => {
    return (
        <>
            {props.films.map((film, index) => (
                <div key={film.uid}
                    className='image-container d-flex justify-content-start m-3'
                >
                    <div onClick={() => props.handleChooseFilm(film)} title={'click to view details'}>
                        <b>{film.properties.title}</b>
                    </div>
                </div>
            ))}
        </>
    );
};
export default TableOfContent;
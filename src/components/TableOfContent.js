import React from 'react';

const TableOfContent = (props) => {
    return (
        <div className="articles card">
            <div className="card-header d-flex align-items-center">
                <h3 className="card-title align-items-start flex-column">Films List</h3>
            </div>
            <div className="card-body pt-6">
                {props.films.map((film) => (
                    <div key={film.uid} className='item'>
                        <div onClick={() => props.handleChooseFilm(film)}
                            title={'click to view details'}>
                            <b>{film.properties.title}</b>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default TableOfContent;
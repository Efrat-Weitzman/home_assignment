import React, { useState, useEffect } from 'react';
import TableOfContent from './components/TableOfContent'
import './App.css';
import Film from './components/Film';

const App = () => {
  const [films, setFilms] = useState([]);
  const [chosenFilm,setChosenFilm]=useState(null);
  const [isChosen,setIsChosen]=useState(false);
  const [favoritesList, setFavoritesList] = useState([]);

  const getFilmsRequest = async () => {
    const url = "https://www.swapi.tech/api/films/";
    const response = await fetch(url);
    const responseJson = await response.json();
    if (responseJson.result) {
      setFilms(responseJson.result);
    }
  };

  useEffect(() => {
    getFilmsRequest();
  }, []);

  useEffect(() => {
		const filmsFavorites = JSON.parse(
			localStorage.getItem('star-wars-app-favorites')
		);
		if (filmsFavorites) {
			setFavoritesList(filmsFavorites);
		}
	}, []);

  function afterChooseFilm(currentFilm){
    setChosenFilm(currentFilm);
    setIsChosen(true);
  }

  function addToFavoriteBtn(filmId){
    const newFavoritesList = [...favoritesList, filmId];
		setFavoritesList(newFavoritesList);
		saveToLocalStorage(newFavoritesList);
  }

  const saveToLocalStorage = (items) => {
		localStorage.setItem('star-wars-app-favorites', JSON.stringify(items));
	};

  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <TableOfContent
          films={films}
          handleChooseFilm={afterChooseFilm}
        />
      </div>

      {isChosen && (
            <Film chosenFilm={chosenFilm}  handleFavoriteBtn={addToFavoriteBtn} listFavorites={favoritesList}/>)}
    </div>
  );
};

export default App;

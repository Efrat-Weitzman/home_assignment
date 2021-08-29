import React, { useState, useEffect } from 'react';
import TableOfContent from './components/TableOfContent'
import './App.css';
import Film from './components/Film';

const App = () => {
  const [films, setFilms] = useState([]);
  const [chosenFilm,setChosenFilm]=useState(null);
  const [isChosen,setIsChosen]=useState(false);
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

  function afterChooseFile(currentFilm){
    setChosenFilm(currentFilm);
    setIsChosen(true);
  }
  return (
    <div className='container-fluid movie-app'>
      <div className='row'>
        <TableOfContent
          films={films}
          handleChooseFilm={afterChooseFile}
        />
      </div>
      {/* <button onClick={()=>afterChooseFile(films[2])}>try</button> */}
      {isChosen && (
            <Film chosenFilm={chosenFilm}/>)}
    </div>
  );
};

export default App;

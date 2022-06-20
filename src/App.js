import { useEffect, useState } from 'react';
import FormMovie from './components/FormMovie';
import MovieList from './components/MovieList';

function App() {

  const [ movies, setMovies ] = useState([]);
  
  useEffect(() => {
    fetchMovie();
  }, [])

  const fetchMovie = async () => {
    try {
      let response = await fetch(`http://movie-app-g2.herokuapp.com/movies`);
    
      if (response.ok) {
        let data = await response.json();
        setMovies(data);
      } else {
        throw Error('Something wrong with fetch data');
      }
    } catch(err) {
      console.log(err);
    }
  }

  const addMovie = (movie) => {
    setMovies((currState) => {
      return [ ...currState, movie ]
    })
  }

  const removeMovie = (movId) => {
    setMovies((currState) => {
      return currState.filter(movie => {
        if (movie._id !== movId) {
          return movie
        }
      })
    })
  }

  return (
    <div>
      <FormMovie saveMovie={addMovie} />
      <MovieList movies={movies} removeMovie={removeMovie}/>
    </div>
  );
}

export default App;

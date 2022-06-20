import React from 'react'
import Movie from './Movie';

export default function MovieList(props) {
  const { movies, removeMovie } = props;

  return (
    <div className='row justify-content-center'>
        { movies.map(mov => (
            <Movie key={mov._id} mov={mov} removeMovie={removeMovie}/>
        )) }
    </div>
  )
}

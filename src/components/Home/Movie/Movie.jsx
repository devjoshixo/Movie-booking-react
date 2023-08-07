import React, { useEffect, useState } from 'react';
import getMovies from '../../../api/getMovies';
import MovieTile from './MovieTile';
import classes from './Movie.module.css';

const Movie = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    async function getMovieData() {
      const data = await getMovies();
      setMovies(data);
    }
    getMovieData();
  }, []);
  return (
    <div>
      {movies && (
        <div className={classes.movielist}>
          {movies.map((movie) => {
            return <MovieTile movie={movie} key={movie.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Movie;

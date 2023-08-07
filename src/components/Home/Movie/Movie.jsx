import React, { useEffect, useState } from 'react';
import getMovies from '../../../api/getMovies';
import MovieTile from './MovieTile';

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
      {movies &&
        movies.map((movie) => {
          if (!!movie.show.image) {
            return <MovieTile movie={movie} />;
          }
        })}
    </div>
  );
};

export default Movie;

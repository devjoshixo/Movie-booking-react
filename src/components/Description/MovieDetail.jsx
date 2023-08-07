import React, { useEffect, useState } from 'react';
import getMoviesData from '../../api/getMovieData';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './MovieDetail.module.css';
import parse from 'html-react-parser';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const search = new URLSearchParams(location.search);

  useEffect(() => {
    async function getMovieFromId() {
      const result = await getMoviesData(search.get('id'));
      console.log(result);
      setMovie(result);
    }
    getMovieFromId();
  }, []);

  return (
    <>
      {movie && (
        <div className={classes.container}>
          <img src={movie.image.original} className={classes.poster} />
          <div className={classes.info}>
            <h1 className={classes.name}>{movie.name}</h1>
            <h2>Genre</h2>
            <div className={classes.genre}>
              {movie.genres.map((item) => {
                return <p>{item}</p>;
              })}
            </div>
            <h2>Summary</h2>
            {parse(movie.summary)}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;

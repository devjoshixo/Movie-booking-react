import React, { useEffect, useState } from 'react';
import getMoviesData from '../../api/getMovieData';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import classes from './MovieDetail.module.css';
import parse from 'html-react-parser';
import BookingForm from './BookingForm';

const MovieDetail = () => {
  const [movie, setMovie] = useState(null);
  const [openForm, setOpenForm] = useState(false);
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

  const onOpenForm = (event) => {
    event.preventDefault();
    setOpenForm((prev) => !prev);
  };

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
            <h2 className={classes.runtime}>Runtime</h2>
            {movie.runtime ? (
              <p>{movie.runtime} minutes</p>
            ) : (
              <p>{movie.averageRuntime} minutes</p>
            )}
            {/* {movie.averageRuntime && <p>{movie.averageRuntime} minutes</p>} */}
            <h2 className={classes.summary}>Summary</h2>
            {parse(movie.summary)}
            <button className={classes.action} onClick={onOpenForm}>
              Book Tickets
            </button>
            {openForm && (
              <BookingForm onOpenForm={onOpenForm} name={movie.name} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default MovieDetail;
